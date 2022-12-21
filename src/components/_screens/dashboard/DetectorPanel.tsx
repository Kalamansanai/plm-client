import { config as apiConfig } from "api";
import { DetectorsApi } from "api_client";
import { Params, useLoaderData } from "react-router-dom";
import { Detector } from "types";

import { Paper, Typography } from "@mui/material";

export async function loader({ params }: { params: Params }) {
    const id = params["detector_id"]! as any as number;

    try {
        const detector = await new DetectorsApi(apiConfig).apiEndpointsDetectorsGetById({ id });
        console.log(detector);
        return detector;
    } catch (err) {
        throw err;
    }
}

export default function DetectorPanel() {
    const detector = useLoaderData() as Detector;

    return (
        <Paper
            sx={{ display: "flex", flexDirection: "column", p: 2, height: "100%", width: "100%" }}
        >
            <Typography variant="h4">{detector.name}</Typography>
            <Typography variant="h6">Mac address: {detector.macAddress}</Typography>
        </Paper>
    );
}
