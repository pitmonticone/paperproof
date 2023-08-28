import { TLParentId, TLShapeId } from "@tldraw/tldraw";
import { UIIdElement, UIShared } from "types";

import getTextSize from '../getTextSize';

import DrawShape from '../DrawShape';

const createNode = (
  shared: UIShared,
  parentId: TLParentId | undefined,
  text: string,
  type: "hypothesis" | "tactic" | "goal",
  // This is for arrows
  id: TLShapeId
): UIIdElement => {
  const newText = text + (localStorage.getItem("dev") === 'true' ? '      ' + id : '');
  const [w, h] = getTextSize(shared.editor, newText);
  return {
    id,
    size: [w, h],
    draw(x, y, prefferedWidth?: number) {
      const effectiveW = !!prefferedWidth && prefferedWidth > w ? prefferedWidth : w;
      if (type === "tactic") {
        DrawShape.tactic(shared.editor, id, parentId, x, y, effectiveW, h, newText);
      } else if (type === "goal") {
        DrawShape.goal(shared.editor, id, parentId, x, y, effectiveW, h, newText);
      } else if (type === "hypothesis") {
        DrawShape.hypothesis(shared.editor, id, parentId, x, y, effectiveW, h, newText);
      }
    }
  }
};

export default createNode;