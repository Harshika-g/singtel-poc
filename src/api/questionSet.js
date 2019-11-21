const questionSet = [
    {
        "questionId": "T1",
        "questionDescription": "How environments are provisoned?",
        "weightage": 10,
        "answerType": "Single Selection",
        "category": "Technology Section",
        "score": null,
        "answers": [
            {
                "_id": "5dbaafb0c19ab7befd8c6eaf",
                "option": "Environments  are provisioned manually.",
                "weightage": 1
            },
            {
                "_id": "5dbaafb0c19ab7befd8c6eb0",
                "option": "All environments configurations are externalised and versioned.",
                "weightage": 1.5
            },
            {
                "_id": "5dbaafb0c19ab7befd8c6eb1",
                "option": "Virtualization used if applicable.",
                "weightage": 2.5
            },
            {
                "_id": "5dbaafb0c19ab7befd8c6eb2",
                "option": "All environments managed effectively.",
                "weightage": 2
            },
            {
                "_id": "5dbaafb0c19ab7befd8c6eb3",
                "option": "Environment provisioning fully automated.",
                "weightage": 3
            }
        ],
        "selectedAnswer": []
    },
    {
        "questionId": "T2",
        "questionDescription": "What process are being followed for testing?",
        "weightage": 10,
        "answerType": "Single Selection",
        "category": "Technology Section",
        "score": null,
        "answers": [
            {
                "_id": "5dbaafb0c19ab7befd8c6eb4",
                "option": "Manual tests or minimal automation.",
                "weightage": 1
            },
            {
                "_id": "5dbaafb0c19ab7befd8c6eb5",
                "option": "Functional test automation",
                "weightage": 1.5
            },
            {
                "_id": "5dbaafb0c19ab7befd8c6eb6",
                "option": "Triggered automated",
                "weightage": 2.5
            },
            {
                "_id": "5dbaafb0c19ab7befd8c6eb7",
                "option": "Smoked tests and dashboard shared with Operational team.",
                "weightage": 2
            },
            {
                "_id": "5dbaafb0c19ab7befd8c6eb8",
                "option": "Chaos Monkey.",
                "weightage": 3
            }
        ],
        "selectedAnswer": []
    },
    // {
    //     "questionId": "T3",
    //     "questionDescription": "How DB changes are managed?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Technology Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6eb9",
    //             "option": "Data migration unversioned and performed manually.",
    //             "weightage": 1
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6eba",
    //             "option": "Changes to DB done with automated scripts versioned with application",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ebb",
    //             "option": "DB changes performed automatically as part of deployment process",
    //             "weightage": 2.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ebc",
    //             "option": "DB upgrades and rollbacks tested with every deployment.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ebd",
    //             "option": "Feedback from DB performance after each release.",
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "T4",
    //     "questionDescription": "How code/build deployment is done?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Technology Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ebe",
    //             "option": "Manual deployment.",
    //             "weightage": 1
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ebf",
    //             "option": "Build automation.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ec0",
    //             "option": "Non-production deployment automation.",
    //             "weightage": 2.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ec1",
    //             "option": "Production deployment automation.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ec2",
    //             "option": "Op.t. and Dev.t. regularly collaborate to manage risks and reduce cycle time.",
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "T5",
    //     "questionDescription": "What process is followed for software building?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Technology Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ec3",
    //             "option": "Manual processes for building software/No artifact versioning.",
    //             "weightage": 1
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ec4",
    //             "option": "Regular automated build and testing. Any build can be recreated from source..",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ec5",
    //             "option": "Automated build and test cycle every time a change is committed .",
    //             "weightage": 2.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ec6",
    //             "option": "Build metrics gathered made visible and take into account.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ec7",
    //             "option": "Continous work on process improvement,better visibility, faster feedback.",
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "T6",
    //     "questionDescription": "Do you use any tools for collaboration?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Technology Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ec8",
    //             "option": "No collaboration tools.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ec9",
    //             "option": "Project planning tool.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6eca",
    //             "option": "Team/toolset integration .",
    //             "weightage": 3.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ecb",
    //             "option": "Knowledge management tool-.",
    //             "weightage": 3
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ecc",
    //             "option": null,
    //             "weightage": null
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "T7",
    //     "questionDescription": "How software configurations are managed?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Technology Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ecd",
    //             "option": "No software configuration management(SCM).",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ece",
    //             "option": "Standardized SCM.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ecf",
    //             "option": "Configuration is delivered together with code .",
    //             "weightage": 3.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ed0",
    //             "option": "Self-healing tools.",
    //             "weightage": 3
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ed1",
    //             "option": null,
    //             "weightage": null
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "T8",
    //     "questionDescription": "What level of monitoring is followed?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Technology Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ed2",
    //             "option": "No or minimal monitoring.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ed3",
    //             "option": "Core monitoring.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ed4",
    //             "option": "Integrated monitoring.",
    //             "weightage": 3.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ed5",
    //             "option": "Analytics/Intelligence.",
    //             "weightage": 3
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ed6",
    //             "option": null,
    //             "weightage": null
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "T9",
    //     "questionDescription": "Do you use any tools to track issues?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Technology Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ed7",
    //             "option": "No tools or minimal tool usuage for issue tracking.",
    //             "weightage": 1
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ed8",
    //             "option": "All issue and bug reports are tracked.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ed9",
    //             "option": "Issue reporting automatization and monitoring.",
    //             "weightage": 2.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6eda",
    //             "option": "Activities based on received feedback and data.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6edb",
    //             "option": "Continous delivery process",
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "T10",
    //     "questionDescription": "How would you describe the organizational and team structure for developing your products?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Technology Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6edc",
    //             "option": "Our dev, ops, service management, security, QA teams are distinct and independent.",
    //             "weightage": 1
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6edd",
    //             "option": "QA is embedded with dev teams to ensure high quality in operations.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ede",
    //             "option": "Dev and Ops teams work together to establish.",
    //             "weightage": 2.5
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6edf",
    //             "option": "Security is interwoven into the development process.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbaafb0c19ab7befd8c6ee0",
    //             "option": "Tickets are assigned immediately to dev teams without passing through ops reviews.",
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    {
        "questionId": "PR1",
        "questionDescription": "What is your delivery process?",
        "weightage": 10,
        "answerType": "Single Selection",
        "category": "Process Section",
        "score": null,
        "answers": [
            {
                "_id": "5dbbd33dd8cb64dc10bec996",
                "option": "Inconsistent delivery process.",
                "weightage": 1
            },
            {
                "_id": "5dbbd33dd8cb64dc10bec997",
                "option": "Scheduled delivery process.",
                "weightage": 1.5
            },
            {
                "_id": "5dbbd33dd8cb64dc10bec998",
                "option": "Automated delivery process.",
                "weightage": 2.5
            },
            {
                "_id": "5dbbd33dd8cb64dc10bec999",
                "option": "Frequent delivery process.",
                "weightage": 2
            },
            {
                "_id": "5dbbd33dd8cb64dc10bec99a",
                "option": "Development process integrated with Six sigma",
                "weightage": 3
            }
        ],
        "selectedAnswer": []
    },
    {
        "questionId": "PR2",
        "questionDescription": "What process is followed for development?",
        "weightage": 10,
        "answerType": "Single Selection",
        "category": "Process Section",
        "score": null,
        "answers": [
            {
                "_id": "5dbbd33dd8cb64dc10bec99b",
                "option": "Ad-hoc development.",
                "weightage": 1
            },
            {
                "_id": "5dbbd33dd8cb64dc10bec99c",
                "option": "Scrum development.",
                "weightage": 1.5
            },
            {
                "_id": "5dbbd33dd8cb64dc10bec99d",
                "option": "Agile development.",
                "weightage": 2.5
            },
            {
                "_id": "5dbbd33dd8cb64dc10bec99e",
                "option": "Lean development.",
                "weightage": 2
            },
            {
                "_id": "5dbbd33dd8cb64dc10bec99f",
                "option": "Continues testing.",
                "weightage": 3
            }
        ],
        "selectedAnswer": []
    },
    // {
    //     "questionId": "PR3",
    //     "questionDescription": "What type of testing is performed?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Process Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9a0",
    //             "option": "Ad-hoc testing.",
    //             "weightage": 1
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9a1",
    //             "option": "Requirement based testing.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9a2",
    //             "option": "Integrated testing.",
    //             "weightage": 2.5
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9a3",
    //             "option": "Qualitative testing.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9a4",
    //             "option": "Organized performance management.",
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "PR4",
    //     "questionDescription": "How will you define your project management?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Process Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9a5",
    //             "option": "Inconsistent project management.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9a6",
    //             "option": "Project & requirement management.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9a7",
    //             "option": "Integrated project management.",
    //             "weightage": 3.5
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9a8",
    //             "option": "Quantitative proj. management.",
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "PR5",
    //     "questionDescription": "What is the frequency of document updations?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Process Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9a9",
    //             "option": "Deployment and development documentation is not available or is out of date.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9aa",
    //             "option": "Development documentation and relevant configuration files up-to-date.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9ab",
    //             "option": "Regular validation of the documentation and related configuration description are provided.",
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9ac",
    //             "option": "Documentation process and structure update based on gathered experience and quality requirements.",
    //             "weightage": 3.5,
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "PR6",
    //     "questionDescription": "What is the level of process that are practiced?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Process Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9ad",
    //             "option": "Uncontrolled or reactive processes(not applied management).",
    //             "weightage": 1
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9ae",
    //             "option": "Processes are managed, but not standarized.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9af",
    //             "option": "Processes are standardized across organization.",
    //             "weightage": 2.5
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9b0",
    //             "option": "Visibilty & predictability of entire process & performance.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbbd33dd8cb64dc10bec9b1",
    //             "option": "Highly optimized & integrated processes.",
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    {
        "questionId": "P1",
        "questionDescription": "In which area team is more organized?",
        "weightage": 10,
        "answerType": "Single Selection",
        "category": "People Section",
        "score": null,
        "answers": [
            {
                "_id": "5dbbd57dd8cb64dc10bec9b8",
                "option": "Teams organized aorund skillsets.",
                "weightage": 1
            },
            {
                "_id": "5dbbd57dd8cb64dc10bec9b9",
                "option": "Team organized around deliveries.",
                "weightage": 1.5
            },
            {
                "_id": "5dbbd57dd8cb64dc10bec9ba",
                "option": "Team organized around projects.",
                "weightage": 2.5
            },
            {
                "_id": "5dbbd57dd8cb64dc10bec9bb",
                "option": "Team organized around products/business lines.",
                "weightage": 2
            },
            {
                "_id": "5dbbd57dd8cb64dc10bec9bc",
                "option": "Interdisciplinary teams organized around KPIs.",
                "weightage": 3
            }
        ],
        "selectedAnswer": []
    },
    {
        "questionId": "P2",
        "questionDescription": "What is your approach to learning?",
        "weightage": 10,
        "answerType": "Single Selection",
        "category": "People Section",
        "score": null,
        "answers": [
            {
                "_id": "5dbbd57dd8cb64dc10bec9bd",
                "option": "Ad-hoc learning.",
                "weightage": 1
            },
            {
                "_id": "5dbbd57dd8cb64dc10bec9be",
                "option": "Team learning.",
                "weightage": 1.5
            },
            {
                "_id": "5dbbd57dd8cb64dc10bec9bf",
                "option": "Value stream learning.",
                "weightage": 2.5
            },
            {
                "_id": "5dbbd57dd8cb64dc10bec9c0",
                "option": "X-process learning.",
                "weightage": 2
            },
            {
                "_id": "5dbbd57dd8cb64dc10bec9c1",
                "option": "External learning .",
                "weightage": 3
            }
        ],
        "selectedAnswer": []
    },
    // {
    //     "questionId": "P3",
    //     "questionDescription": "Select ther relevant?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "People Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbbd57dd8cb64dc10bec9c2",
    //             "option": "Ad-hoc approach regarding to competences development.",
    //             "weightage": 1
    //         },
    //         {
    //             "_id": "5dbbd57dd8cb64dc10bec9c3",
    //             "option": "Competences are developed with the help of training and development.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbbd57dd8cb64dc10bec9c4",
    //             "option": "Analysis of existing competences and future development.",
    //             "weightage": 2.5
    //         },
    //         {
    //             "_id": "5dbbd57dd8cb64dc10bec9c5",
    //             "option": "Mentor usage.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbbd57dd8cb64dc10bec9c6",
    //             "option": "Continous capability improvement.",
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "C1",
    //     "questionDescription": "How frequent communication happens?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Culture Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9ca",
    //             "option": "Restricted communication.",
    //             "weightage": 1
    //         },
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9cb",
    //             "option": "Rapid intra-team(inside) communication.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9cc",
    //             "option": "Rapid communication between teams (inter-team).",
    //             "weightage": 2.5
    //         },
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9cd",
    //             "option": "Frequent,collaborative communication.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9ce",
    //             "option": "Rapid feedback.",
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "C2",
    //     "questionDescription": "Where you lack in terms of delivery?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Culture Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9cf",
    //             "option": "Uncommunicated vision.",
    //             "weightage": 1
    //         },
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9d0",
    //             "option": "Clear delivery requirements.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9d1",
    //             "option": "Clear project requirements.",
    //             "weightage": 2.5
    //         },
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9d2",
    //             "option": "Clear product/business line requirements.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9d3",
    //             "option": "Clear organization requirements.",
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    // {
    //     "questionId": "C3",
    //     "questionDescription": "What best defines your business culture?",
    //     "weightage": 10,
    //     "answerType": "Single Selection",
    //     "category": "Culture Section",
    //     "score": null,
    //     "answers": [
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9d4",
    //             "option": "Lack of awareness as to how culture is impacting day-to-day business.",
    //             "weightage": 1
    //         },
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9d5",
    //             "option": "Aware of aspects in culture that may help or hinder day-to-day business.",
    //             "weightage": 1.5
    //         },
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9d6",
    //             "option": "Cultural traits that support business strategies have been identified.",
    //             "weightage": 2.5
    //         },
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9d7",
    //             "option": "Culture viewed as an asset to be managed.",
    //             "weightage": 2
    //         },
    //         {
    //             "_id": "5dbbd7a6d8cb64dc10bec9d8",
    //             "option": "Desired elements of the culture are identified, ingrained and sustainable for creating the way we work here",
    //             "weightage": 3
    //         }
    //     ],
    //     "selectedAnswer": []
    // },
    {
        "questionId": "C4",
        "questionDescription": "What best defines your communication?",
        "weightage": 10,
        "answerType": "Single Selection",
        "category": "Culture Section",
        "score": null,
        "answers": [
            {
                "_id": "5dbbd7a6d8cb64dc10bec9d9",
                "option": "Poor, ad-hoc communication and coordination.",
                "weightage": 2
            },
            {
                "_id": "5dbbd7a6d8cb64dc10bec9da",
                "option": "Manged communication.",
                "weightage": 1.5
            },
            {
                "_id": "5dbbd7a6d8cb64dc10bec9db",
                "option": "Active collaboration.",
                "weightage": 3.5
            },
            {
                "_id": "5dbbd7a6d8cb64dc10bec9dc",
                "option": "Collaboration based on process meaurement, which allow to identify bottlenecks and inefficiencies.",
                "weightage": 3
            }
        ],
        "selectedAnswer": []
    },
    {
        "questionId": "C5",
        "questionDescription": "Select the relevant ?",
        "weightage": 10,
        "answerType": "Single Selection",
        "category": "Culture Section",
        "score": null,
        "answers": [
            {
                "_id": "5dbbd7a6d8cb64dc10bec9dd",
                "option": "Sub-innovating/no innovations.",
                "weightage": 2
            },
            {
                "_id": "5dbbd7a6d8cb64dc10bec9de",
                "option": "Innovation by necessity.",
                "weightage": 1.5
            },
            {
                "_id": "5dbbd7a6d8cb64dc10bec9df",
                "option": "Innovation by design.",
                "weightage": 3.5
            },
            {
                "_id": "5dbbd7a6d8cb64dc10bec9e0",
                "option": "Strategic innovation.",
                "weightage": 3
            }
        ],
        "selectedAnswer": []
    }
];
export default questionSet;
