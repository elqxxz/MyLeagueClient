function LeftBarBtn(btn) {
    console.log(btn.id);

    const HomePageStatus = document.getElementById('Home-Page').className;
    const playPageStatus = document.getElementById('Play-Page').className;
    const shopPageStatus = document.getElementById('Shop-Page').className;
    const lootPageStatus = document.getElementById('Loot-Page').className;
    const eventPageStatus = document.getElementById('Event-Page').className;

    switch (btn.id) {
        case "Play-Button":
            switch (mainPageStatus) {
                case "shown":
                        document.getElementById("Home-Page").className = "hidden";
                        document.getElementById("Play-Page").className = "shown";

                        document.getElementById("Play-Button").className = "Active";
                    break;
                case "hidden":
                        if (playPageStatus == 'shown') {
                            document.getElementById('Play-Page').className = 'hidden';
                            document.getElementById('Home-Page').className = 'shown';

                            document.getElementById("Play-Button").className = "InActive";
                        };
                        if (shopPageStatus == 'shown') {
                            document.getElementById('Shop-Page').className = 'hidden';
                            document.getElementById('Play-Page').className ='shown';

                            document.getElementById("Shop-Button").className = "InActive";
                            document.getElementById("Play-Button").className = "Active";
                        };
                        if (lootPageStatus =='shown') {
                            document.getElementById('Loot-Page').className = 'hidden';
                            document.getElementById('Play-Page').className ='shown';

                            document.getElementById("Loot-Button").className = "InActive";
                            document.getElementById("Play-Button").className = "Active";
                        };
                        if (eventPageStatus =='shown') {
                            document.getElementById('Event-Page').className = 'hidden';
                            document.getElementById('Play-Page').className ='shown';

                            document.getElementById("Event-Button").className = "InActive";
                            document.getElementById("Play-Button").className = "Active";
                        };
                    break;
            };
        break;
        case "Shop-Button":
            switch (HomePageStatus) {
                case "shown":
                        document.getElementById("Home-Page").className = "hidden";
                        document.getElementById("Shop-Page").className = "shown";

                        document.getElementById("Shop-Button").className = "Active";
                    break;
                case "hidden":
                        if (playPageStatus == 'shown') {
                            document.getElementById('Play-Page').className = 'hidden';
                            document.getElementById('Shop-Page').className = 'shown';

                            document.getElementById("Play-Button").className = "InActive";
                            document.getElementById("Shop-Button").className = "Active";
                        };
                        if (shopPageStatus == 'shown') {
                            document.getElementById('Shop-Page').className = 'hidden';
                            document.getElementById('Home-Page').className ='shown';

                            document.getElementById("Shop-Button").className = "InActive";
                        };
                        if (lootPageStatus =='shown') {
                            document.getElementById('Loot-Page').className = 'hidden';
                            document.getElementById('Shop-Page').className ='shown';

                            document.getElementById("Loot-Button").className = "InActive";
                            document.getElementById("Shop-Button").className = "Active";
                        };
                        if (eventPageStatus =='shown') {
                            document.getElementById('Event-Page').className = 'hidden';
                            document.getElementById('Shop-Page').className ='shown';

                            document.getElementById("Event-Button").className = "InActive";
                            document.getElementById("Shop-Button").className = "Active";
                        };
                    break;
            };
        break;
        case "Loot-Button":
            switch (HomePageStatus) {
                case "shown":
                        document.getElementById("Home-Page").className = "hidden";
                        document.getElementById("Loot-Page").className = "shown";

                        document.getElementById("Loot-Button").className = "Active";
                    break;
                case "hidden":
                        if (playPageStatus == 'shown') {
                            document.getElementById('Play-Page').className = 'hidden';
                            document.getElementById('Loot-Page').className = 'shown';

                            document.getElementById("Play-Button").className = "InActive";
                            document.getElementById("Loot-Button").className = "Active";
                        };
                        if (shopPageStatus == 'shown') {
                            document.getElementById('Shop-Page').className = 'hidden';
                            document.getElementById('Loot-Page').className ='shown';

                            document.getElementById("Shop-Button").className = "InActive";
                            document.getElementById("Loot-Button").className = "Active";
                        };
                        if (lootPageStatus =='shown') {
                            document.getElementById('Loot-Page').className = 'hidden';
                            document.getElementById('Home-Page').className ='shown';

                            document.getElementById("Loot-Button").className = "InActive";
                        };
                        if (eventPageStatus =='shown') {
                            document.getElementById('Event-Page').className = 'hidden';
                            document.getElementById('Loot-Page').className ='shown';
                        
                            document.getElementById("Event-Button").className = "InActive";
                            document.getElementById("Loot-Button").className = "Active";
                        };
                    break;
            };
        break;
        case "Event-Button":
            switch (HomePageStatus) {
                case "shown":
                        document.getElementById("Home-Page").className = "hidden";
                        document.getElementById("Event-Page").className = "shown";

                        document.getElementById("Event-Button").className = "Active";
                    break;
                case "hidden":
                        if (playPageStatus == 'shown') {
                            document.getElementById('Play-Page').className = 'hidden';
                            document.getElementById('Event-Page').className = 'shown';

                            document.getElementById("Play-Button").className = "InActive";
                            document.getElementById("Event-Button").className = "Active";
                        };
                        if (shopPageStatus == 'shown') {
                            document.getElementById('Shop-Page').className = 'hidden';
                            document.getElementById('Event-Page').className ='shown';

                            document.getElementById("Shop-Button").className = "InActive";
                            document.getElementById("Event-Button").className = "Active";
                        };
                        if (lootPageStatus =='shown') {
                            document.getElementById('Loot-Page').className = 'hidden';
                            document.getElementById('Event-Page').className ='shown';

                            document.getElementById("Loot-Button").className = "InActive";
                            document.getElementById("Event-Button").className = "Active";
                        };
                        if (eventPageStatus =='shown') {
                            document.getElementById('Event-Page').className = 'hidden';
                            document.getElementById('Home-Page').className ='shown';

                            document.getElementById("Event-Button").className = "InActive";
                        };
                    break;
            };
        break;
    };
};