import * as React from "react";
import { Steps } from "antd";

import { CreateOrganization } from "../../organization/components/CreateOrganization";
import { CreateProject } from "../../project/components/CreateProject";
import { CreateSprint } from "../../sprint/components/CreateSprint";

import "./Wizard.scss";

import { Icon } from "antd";
import { FormComponentProps } from "antd/lib/form";

const Step = Steps.Step;
const steps = [0, 1, 2];

export class Wizard extends React.PureComponent<Wizard.Props, Wizard.State> {

    constructor(props: Wizard.Props) {
        super(props);
        const currentStep = steps.indexOf(props.stepNumber) !== -1 ? props.stepNumber : 0;
        this.state = {
            currentIndex: currentStep,
        };
        this.changeSteps = this.changeSteps.bind(this);
    }

    public render() {
        const { currentIndex } = this.state;
        return (
            <div>
                <Steps current={currentIndex}>
                    {
                        steps.map((item) =>
                        <Step
                            key={item}
                            title={this.getTitle(item)} />)
                    }
                </Steps>
                <div className="ant-steps__content">
                    {this.getContent(currentIndex)}
                </div>
            </div>
        );
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
                const props = { isOnboarding: true } as CreateOrganization.Props & FormComponentProps;
                return <CreateOrganization {...props} onCreateCallback={this.changeSteps} />;
            }
            case 1:
                return <CreateProject />;
            case 2:
                return <CreateSprint />;
            default:
                return null;
        }
    }

    private changeSteps(childIdentifier: string) {
        let nextStep: number;
        switch (childIdentifier) {
            case "CreateOrganization":
                nextStep = 1;
                break;
            default:
                break;
        }
        this.setState({ currentIndex: nextStep });
    }
}
