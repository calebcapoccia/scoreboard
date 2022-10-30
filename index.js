let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");
homePointsCount = 0;
guestPointsCount = 0;

function addPointsHome(points) {
    homePointsCount += points;
    homePoints.innerText = homePointsCount;
}

function addPointsGuest(points) {
    guestPointsCount += points;
    guestPoints.innerText = guestPointsCount;
}
