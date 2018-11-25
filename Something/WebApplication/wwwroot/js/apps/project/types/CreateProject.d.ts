declare module CreateProject {
    interface Props {
        isOnboarding?: boolean;
        onCreateCallback: (id: string) => void;
        organizationId: number;
    }

    interface State {
        projectName: string;
        hasError: boolean;
    }
}
