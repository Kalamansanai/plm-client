import { createTheme } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";
import type {} from "@mui/x-data-grid/themeAugmentation";

declare module "@mui/material/styles" {
    interface Theme {
        drawerWidth: number;
        borderRadius: number;
    }

    interface TypeBackground {
        muted: string;
        subtle: string;
    }

    interface ThemeOptions {
        drawerWidth?: number;
        borderRadius?: number;
    }
}

const theme = createTheme({
    drawerWidth: 240,
    borderRadius: 8,
    palette: {
        primary: {
            dark: "#00457E",
            main: "#1d6aa8",
            light: "#8bc6f7",
        },
        background: {
            default: "#c3c3c3",
            paper: "#f0f0f0",
            muted: "#d8d8d8",
            subtle: "#e6e6e6",
        },
        text: {
            primary: grey[800],
            secondary: grey[600],
            disabled: grey[400],
        },
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    "&.MuiDivider-root::before": {
                        position: "static",
                    },
                    "&.MuiDivider-root::after": {
                        position: "static",
                    },
                },
            },
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    "&.MuiDataGrid-root .MuiDataGrid-toolbarContainer": {
                        paddingTop: 0,
                    },
                    "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus": {
                        outline: "none",
                    },
                    "&.MuiDataGrid-root .MuiDataGrid-cell:focus": {
                        outline: "none",
                    },
                    "& .datagrid-selectable-row": {
                        cursor: "pointer",
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    "& .hover": {
                        display: "none",
                    },
                    "&:hover .hover": {
                        display: "flex",
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    "& .hover": {
                        display: "none",
                    },
                    "&:hover .hover": {
                        display: "flex",
                    },
                },
            },
        },
    },
});

export default theme;
