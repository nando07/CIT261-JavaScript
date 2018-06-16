        var isBlurred = true;
        var wall = document.getElementById("wall");
        var hammer = document.getElementById("wallHammer");

// This function blurs the cover image
        function unblur() {

            if (isBlurred) {
                hammer.style.animation = "wallH 3s ease";

                //    hammer.style.transform = "rotateY(1080deg)";
                wall.style.transition = "filter 3s ease";
                wall.style.filter = "blur(0px)";
                isBlurred = false;

            } else {
                hammer.style.animation = "asgard 3s ease";
                wall.style.transition = "filter 3s ease";
                wall.style.filter = "blur(20px)";
                isBlurred = true;
            }
        }

// This is for the superman animation
        function moveLeft(open) {
            var leftArm = document.getElementById("leftSm");

            if (open) {
                leftArm.style.transition = "left 0.5s cubic-bezier(.01,.96,.93,.07)";
                leftArm.style.left = "0px";

            } else {
                leftArm.style.transition = "left 1s ease-out";
                leftArm.style.left = "130px";
            }
        }
        var e = document.getElementById("toggle");
        var showingHope = false;

        function toggle() {

            if (showingHope) {
                e.innerHTML = "Show hope!";
                closeChest();
                showingHope = false
            } else {
                e.innerHTML = "Don't show hope";
                openChest();
                showingHope = true;
            }
        }

        function moveRight(open) {
            var rArm = document.getElementById("rSm");

            if (open) {
                rArm.style.transition = "right 0.5s cubic-bezier(.01,.96,.93,.07)";
                rArm.style.right = "0px";
            } else {
                rArm.style.transition = "right 1s ease-out";
                rArm.style.right = "130px";
            }
        }

        function openChest() {
            moveRight(true);
            moveLeft(true);
        }

        function closeChest() {
            moveRight(false);
            moveLeft(false);
        }
