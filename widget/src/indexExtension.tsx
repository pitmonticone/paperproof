import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { EditorContext, RpcContext, useAsync } from "@leanprover/infoview";
import { Location } from "vscode-languageserver-protocol";
import App from "./tldraw_stuff/App";

export default function () {
  const editorConnection = useContext(EditorContext);
  const rs = useContext(RpcContext);
  const [location, setLocation] = useState<Location | undefined>(undefined);

  useEffect(() => {
    return editorConnection.events.changedCursorLocation.on((loc) => {
      setLocation(loc);
    }).dispose;
  }, [rs]);

  const response = useAsync<any>(async () => {
    if (!location) {
      return Promise.reject();
    }
    const context = await rs.call("getPpContext", {
      pos: location.range.start,
    });
    return context;
  }, [location]);

  if (response.state === "loading") {
    return <div>Loading...</div>;
  } else if (response.state === "rejected") {
    return <div>Error: {anyToString(response.error)}</div>;
  } else {
    return <App proofTree={JSON.parse(response.value)} />;
  }
}

function anyToString(s: any): string {
  if (typeof s === "string") {
    return s;
  }
  return JSON.stringify(s);
}