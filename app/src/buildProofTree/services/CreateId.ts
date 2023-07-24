import { Editor as App, TLShapeId, createShapeId } from "@tldraw/tldraw";

// Hmm is app & tacticId & windowId enough
const createHypTacticId = (app: App, tacticId: string, fromNodeId: string | null, windowId: string | number): TLShapeId => {
  return createShapeId(`hypTactic-${tacticId}-from-${fromNodeId ? fromNodeId : "null"}-window-${windowId}`);
}

const createGoalTacticId = (app: App, tacticId: string): TLShapeId => {
  return createShapeId(`goalTactic-${tacticId}`);
}

const createNodeId = (app: App, nodeId: string): TLShapeId => {
  return createShapeId(`node-${nodeId}`);
}

const createWindowId = (app: App, windowId: string | number): TLShapeId => {
  return createShapeId(`window-${windowId}`);
}

export { createHypTacticId, createGoalTacticId, createNodeId, createWindowId };
