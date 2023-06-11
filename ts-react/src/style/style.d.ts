import 'styled-components';

declare module "styled-components" {
    export interface DefaultTheme {
        mode: {
            mainBackground:string;
            sidebarBackground:string;
            textColor: string;
            contentColor: string;
            hoverColor: string;
            border: string;
            divider: string;
            slider:string;
        };
    }
}