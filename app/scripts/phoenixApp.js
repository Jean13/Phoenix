var app = angular.module('phoenixApp', []);
        app.controller('homeController', function () {
            var homeBoxes = [
                {
                    image: 'images/box1.jpg',
                    description: "The world's most powerful security platform",
                    comment: "Learn more"
                },
                {
                    image: 'images/box2.jpg',
                    description: "Prevention: The Key To User Safety",
                    comment: "Learn more"
                },
                {
                    image: 'images/box3.jpg',
                    description: '',
                    comment: "Contact us"
                }
            ];

            this.homeBoxes = homeBoxes;

            var leftNav = [
                {
                    link: "#",
                    id: "productTag",
                    name: " Product X"
                },
                {
                    link: "#",
                    id: "modelTag",
                    name: " Model Z"
                },
                {
                    link: "destroyer.html",
                    id: "destroyerTag",
                    name: " Destroyer II"
                },
                {
                    link: "#",
                    id: "powerTag",
                    name: " Powershield"
                },
                {
                    link: "#",
                    id: "updatesTag",
                    name: " Updates"
                }
            ];

            this.leftNav = leftNav;

            var rightNav = [
                {
                    link: "#",
                    id: "supportTag",
                    name: " Support"
                },
                {
                    link: "#",
                    id: "findTag",
                    name: " Find Us"
                },
                {
                    link: "#",
                    id: "shopTag",
                    name: " Shop"
                }
            ];

            this.rightNav = rightNav;


            this.tab = 1;

            this.filtText = '';

            var appliances = [
                {
                    name: 'Identify Threats in Real Time',
                    image: 'images/analytics.png',
                    category: 'analytics',
                    description: ' Test, characterize and conduct forensic examinations on next-generation cyber attacks by simulating their execution path with a virtual machine technology.',
                    comment: ''
                        },
                {
                    name: 'Keeping Data Organized',
                    image: 'images/cns.jpg',
                    category: 'cns',
                    description: 'Unify reporting and configuration, while monitoring and correlating attacks that simultaneously cross multiple vectors of the network - increasing the efficacy of the platform.',
                    comment: ''
                        },
                {
                    name: 'A Free-Flying Microgravity Weapon',
                    image: 'images/pod.jpg',
                    category: 'pod',
                    description: "Address critical vectors of attack: Web, email, file, endpoint and mobile. Enable rapid identification and remediation of attacks that have penetrated and are residing on an organization's endpoints.",
                    comment: ''
                        }
                        ];

            this.appliances = appliances;

            this.select = function (setTab) {
                this.tab = setTab;

                if (setTab === 2)
                    this.filtText = "analytics";
                else if (setTab === 3)
                    this.filtText = "cns";
                else if (setTab === 4)
                    this.filtText = "pod";
                else
                    this.filtText = "";
            }

            this.isSelected = function (checkTab) {
                return (this.tab === checkTab);
            }

            var destroyerBoxes = [
                {
                    image: 'images/box4.jpg',
                    date: "January 6, 2016",
                    name: "Space station system is live",
                    description: "Space Station system is live and functional.",
                    comment: "Read more"
                },
                {
                    image: 'images/box5.jpg',
                    date: "February 14, 2016",
                    name: "Rocket defense test",
                    description: "Destroyer II completes rocket defense test.",
                    comment: "Read more"
                },
                {
                    image: 'images/box6.jpg',
                    date: "March 5, 2016",
                    name: "Destroyer ii is in orbit",
                    description: 'Destroyer II is fully functional in orbit.',
                    comment: "Read more"
                }
            ];

            this.destroyerBoxes = destroyerBoxes;

        });