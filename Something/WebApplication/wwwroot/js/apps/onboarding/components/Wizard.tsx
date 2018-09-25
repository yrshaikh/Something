import * as React from "react";
import { Steps, Button, message } from "antd";

import "./Wizard.scss";

const Step = Steps.Step;

const steps = [
    {
        title: "Step 1",
        description: "Set up the Company",
    },
    {
        title: "Step 2",
        description: "Create New Project",
    },
    {
        title: "Step 3",
        description: "Manage Sprints",
    },
];

export class Wizard extends React.Component<Wizard.Props, Wizard.State> {
    constructor(props: Wizard.Props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }

    public next() {
        const current = this.state.currentIndex + 1;
        this.setState({ currentIndex: current });
    }

    public prev() {
        const current = this.state.currentIndex - 1;
        this.setState({ currentIndex: current });
    }

    public render() {
        const { currentIndex } = this.state;
        return (
            <div>
                <Steps current={currentIndex}>
                    {steps.map((item) => <Step key={item.title} title={item.title} description={item.description} />)}
                </Steps>
                <div className="ant-steps__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="ant-steps__action">
                    {
                        currentIndex < steps.length - 1
                        && <Button type="primary" onClick={() => this.next()}>Next</Button>
                    }
                    {
                        currentIndex === steps.length - 1
                        && <Button type="primary" onClick={() => message.success("Processing complete!")}>Done</Button>
                    }
                    {
                        currentIndex > 0
                        && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
                            </Button>
                        )
                    }
                </div>
            </div>
        );
    }
}
