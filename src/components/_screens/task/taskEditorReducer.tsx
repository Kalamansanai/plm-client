import { CompanyHierarchyNode, Coordinates, Job, Step, TaskType, Object } from "types";
import { v4 as uuidv4 } from "uuid";

export type SelectionType = "step" | "object";

export type Selection = {
    uuid: string | null;
    selectionType: SelectionType;
    new: boolean;
};

export type EditedTask = {
    id: number;
    name: string;
    taskType: TaskType;
    location: CompanyHierarchyNode;
    job: Job;
    steps: Array<EditedStep>;
    objects: Array<EditedObject>;
};

export type EditedObject = Object & { uuid: string };

export type EditedStep = Omit<Step, "object"> & { uuid: string; object: EditedObject };

export type State = {
    task: EditedTask;
    selection: Selection | null;
};

export type Action =
    | { type: "Select"; selection: Selection | null }
    | ({ type: "NewObject" } & Omit<EditedObject, "id" | "uuid">)
    | ({ type: "EditObject" } & Omit<EditedObject, "id">)
    | { type: "DeleteObject"; uuid: string }
    | ({ type: "NewStep" } & Omit<EditedStep, "id" | "uuid">)
    | ({ type: "EditStep" } & Omit<EditedStep, "id">)
    | { type: "DeleteStep"; uuid: string };

export default function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "Select": {
            const newState = { ...state };
            if (
                !action.selection ||
                (state.selection &&
                    state.selection.uuid === action.selection.uuid &&
                    state.selection.selectionType === action.selection.selectionType)
            ) {
                newState.selection = null;
            } else {
                newState.selection = {
                    uuid: action.selection.uuid,
                    selectionType: action.selection.selectionType,
                    new: action.selection.new,
                };
            }

            return newState;
        }
        case "NewObject": {
            const newState = { ...state };
            newState.task.objects.push({
                id: 0,
                uuid: uuidv4(),
                name: action.name,
                coordinates: action.coordinates,
            });
            return newState;
        }
        case "EditObject": {
            const newState = { ...state };
            newState.task.objects = newState.task.objects.map((o) => {
                if (o.uuid === action.uuid)
                    return { ...o, name: action.name, coordinates: action.coordinates };

                return o;
            });
            return newState;
        }
        case "DeleteObject": {
            const newState = { ...state };
            newState.task.objects = newState.task.objects.filter((o) => o.uuid != action.uuid);
            newState.task.steps = newState.task.steps.filter((s) => s.object.uuid != action.uuid);
            return state;
        }
        case "NewStep": {
            const newState = { ...state };
            newState.task.steps.push({
                id: 0,
                uuid: uuidv4(),
                orderNum: action.orderNum,
                expectedInitialState: action.expectedInitialState,
                expectedSubsequentState: action.expectedSubsequentState,
                object: action.object,
            });
            return newState;
        }
        case "EditStep": {
            const newState = { ...state };
            newState.task.steps = newState.task.steps.map((s) => {
                if (s.uuid === action.uuid)
                    return {
                        ...s,
                        orderNum: action.orderNum,
                        expectedInitialState: action.expectedInitialState,
                        expectedSubsequentState: action.expectedSubsequentState,
                    };

                return s;
            });
            return newState;
        }
        case "DeleteStep": {
            const newState = { ...state };
            newState.task.steps = newState.task.steps.filter((s) => s.uuid != action.uuid);
            return newState;
        }
    }
}