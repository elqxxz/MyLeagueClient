function HomeBottomBarBtnClick(btn) {
    const PatchNoteBtn = document.getElementById('PatchNoteBtn').className;
    const EsportsBtn = document.getElementById('EsportsBtn').className;
    const MerchBtn = document.getElementById('MerchBtn').className;

    switch (btn.id) {
        case 'PatchNoteBtn':
            if (PatchNoteBtn == 'InActive') {
                if (EsportsBtn == 'Active') {
                    document.getElementById('PatchNoteBtn').className = "Active";
                    document.getElementById('EsportsBtn').className = "InActive";

                    document.getElementById('PatchNotePage').className = 'shown';
                    document.getElementById('EsportsPage').className = 'hidden';
                };
                if (MerchBtn == 'Active') {
                    document.getElementById('PatchNoteBtn').className = "Active";
                    document.getElementById('MerchBtn').className = "InActive";

                    document.getElementById('PatchNotePage').className ='shown';
                    document.getElementById('MerchPage').className = 'hidden';
                };
            };
        break;
        case 'EsportsBtn':
            if (EsportsBtn == 'InActive') {
                if (PatchNoteBtn == 'Active') {
                    document.getElementById('EsportsBtn').className = "Active";
                    document.getElementById('PatchNoteBtn').className = "InActive";

                    document.getElementById('EsportsPage').className = 'shown';
                    document.getElementById('PatchNotePage').className ='hidden';
                };
                if (MerchBtn == 'Active') {
                    document.getElementById('EsportsBtn').className = "Active";
                    document.getElementById('MerchBtn').className = "InActive";

                    document.getElementById('EsportsPage').className ='shown';
                    document.getElementById('MerchPage').className = 'hidden';
                };
            };
        break;
        case 'MerchBtn':
            if (MerchBtn == 'InActive') {
                if (PatchNoteBtn == 'Active') {
                    document.getElementById('MerchBtn').className = "Active";
                    document.getElementById('PatchNoteBtn').className = "InActive";

                    document.getElementById('MerchPage').className ='shown';
                    document.getElementById('PatchNotePage').className = 'hidden';
                };
                if (EsportsBtn == 'Active') {
                    document.getElementById('MerchBtn').className = "Active";
                    document.getElementById('EsportsBtn').className = "InActive";

                    document.getElementById('MerchPage').className ='shown';
                    document.getElementById('EsportsPage').className = 'hidden';
                };
            };
        break;
    };
}