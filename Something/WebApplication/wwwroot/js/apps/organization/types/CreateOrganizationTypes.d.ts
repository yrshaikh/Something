export declare module CreateOrganizationTypes {
    interface Props {
        isOnboarding?: boolean;
        onCreateCallback: (id: string) => void;
    }
    
    interface State {
        organizationName: string;
        hasError: boolean;
    }
}
