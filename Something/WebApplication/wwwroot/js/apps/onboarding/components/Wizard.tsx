import * as React from "react";
import { Steps, Button, message } from "antd";

import { CreateCompany } from "../../company/components/CreateCompany";
import { CreateProject } from "../../project/components/CreateProject";
import { CreateSprint } from "../../sprint/components/CreateSprint";

import "./Wizard.scss";
import { FormComponentProps } from "antd/lib/form";

const Step = Steps.Step;

const steps = [0, 1, 2];

export class Wizard extends React.Component<Wizard.Props, Wizard.State> {
    constructor(props: Wizard.Props) {
        super(props);
        const currentStep = steps.indexOf(props.stepNumber) !== -1 ? props.stepNumber : 0;
        this.state = {
            currentIndex: currentStep,
        };
    }

    private next(): void {
        const current = this.state.currentIndex + 1;
        this.setState({ currentIndex: current });
    }

    private prev() {
        const current = this.state.currentIndex - 1;
        this.setState({ currentIndex: current });
    }

    private getTitle(index: number): string {
        switch (index) {
            case 0:
                return "Setup a new Organization";
            case 1:
                return "Create new project";
            case 2:
                return "Manage sprints";
            default:
                return null;
        }
    }

    private getContent(index: number): JSX.Element {
        switch (index) {
            case 0:
            {
                const props = {} as CreateCompany.Props & FormComponentProps;
                return <CreateCompany {...props} />;
            }
            case 1:
                return <CreateProject />;
            case 2:
                return <CreateSprint />;
            default:
                return null;
        }
    }

    public render() {
        const { currentIndex } = this.state;
        return (
            <div>
                <Steps current={currentIndex}>
                    {steps.map((item) => <Step key={item} title={this.getTitle(item)} />)}
                </Steps>
                <div className="ant-steps__content">
                    {this.getContent(currentIndex)}
                </div>
            </div>
        );
    }
}
