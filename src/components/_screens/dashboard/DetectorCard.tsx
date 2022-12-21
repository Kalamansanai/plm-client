import { StateIndicator as DetectorStateIndicator } from "components/DetectorIndicators";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CompanyHierarchyNode, Detector, Location, OngoingTask } from "types";

import PlaceIcon from "@mui/icons-material/Place";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Box, Card, CardActionArea, Grid, Tooltip, Typography } from "@mui/material";

export default function DetectorCardsGrid({ locations }: { locations: Array<Location> }) {
    const cards = locations
        .filter((l) => l.detector)
        .map((l, i) => <DetectorCard key={i} location={l as CardLocation} />);

    return (
        <>
            <Grid container flexGrow={1} spacing={1} alignContent="flex-start">
                {cards}
            </Grid>
        </>
    );
}

export type CardLocation = CompanyHierarchyNode & {
    detector: Detector;
    hasSnapshot: boolean;
    ongoingTask?: OngoingTask;
};

function DetectorCard({ location }: { location: CardLocation }) {
    const { detector_id } = useParams();
    const detectorId = Number(detector_id);

    const isSelected = location.detector.id === detectorId;
    const navigate = useNavigate();

    const onClick = () => {
        if (isSelected) {
            navigate("../..", { relative: "path" });
        } else {
            navigate(`detector/${location.detector.id}`, { relative: "route" });
        }
    };

    return (
        <>
            <Grid item xs={6} sm={6} md={12}>
                <Card
                    sx={{
                        // Enough height to fit the button column - my first attempt was setting the
                        // button column width to 0, but that caused weird artifacts on the border
                        // (probably some pixels of the icon buttons were shown somewhy)
                        height: "120px",
                        flexShrink: 0,
                        display: "flex",
                        border: "1px solid",
                        borderColor: isSelected ? "primary.main" : "divider",
                    }}
                >
                    <CardActionArea
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            p: 1,
                            width: 0,
                            flexGrow: 1,
                            bgcolor: isSelected ? "primary.light" : "default",
                        }}
                        onClick={onClick}
                    >
                        <Typography variant="h5">{location.detector.name}</Typography>
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            sx={{ flexGrow: 1 }}
                        >
                            <Box display="flex" alignItems="center">
                                <PlaceIcon sx={{ mr: 1, color: "text.secondary" }} />
                                <Typography color="text.secondary" sx={{ fontSize: "1.2em" }}>
                                    {location.name}
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" gap={1}>
                            <DetectorStateIndicator state={location.detector.state} />
                        </Box>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
}
