
                (function() {
                    var classname = document.getElementsByClassName("print-button");
                    var print = function() {
                        window.print();
                    };
                    for (var i = 0; i < classname.length; i++) {
                        classname[i].addEventListener('click', print, false);
                    }
                })();
            