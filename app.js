const people = [
    { avatar: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg", username: "SparkleGuru", user: "Alice123" },
    { avatar: "https://pbs.twimg.com/media/FmZf1SWagAAiGNg.jpg", username: "LunaDreamer", user: "StellaSunset" },
    { avatar: "https://pbs.twimg.com/media/FmSgc2-aAAIXH80.jpg", username: "PixelNinja", user: "NeoGamer" },
];

const peopleList = document.querySelector(".peopleList")
people.forEach((person) => {
    peopleList.innerHTML += `
    <div class="peopleItem">
        <img src="${person.avatar}" alt="avatar" class="avatar">
            <div class="userCont">
                <span class="userName">${person.username}</span>
                <span class="user">@${person.user}</span>
            </div>
            <button class="followBtn">Follow</button>
    </div>
    `
})
