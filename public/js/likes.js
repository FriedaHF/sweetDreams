const likeSongIcons = document.querySelectorAll(".likemusic");
const deleteSongIcons = document.querySelectorAll(".deleteLikeSong");
const favIcon = document.querySelectorAll(".fav-icon");
const likeBook = document.querySelectorAll(".bookLikeIcon")

//logic to handle like song with event listener and fetch request
const likeSongHandler = async (songId) => {
  try {
    const response = await fetch(`/api/likes/songlike`, {
      method: "POST",
      body: JSON.stringify({ song_id: parseInt(songId) }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.ok
      ? console.log("Song liked")
      : console.error("Failed to like the song");
  } catch (error) {
    console.error("Error occurred while liking the song", error);
  }
};

likeSongIcons.forEach((icon) => {
  icon.addEventListener("click", () => likeSongHandler(icon.dataset.songId));
});

//logic to handle delete song with event listener and fetch request
const deleteSongHandler = async (songId) => {
  try {
    const res = await fetch(`/api/likes/songlike/${songId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      console.log("Song deleted");
      document.location.reload("/mysongs");
    } else {
      console.error("Failed to delete the song");
    }
  } catch (error) {
    console.error("Error occurred while deleting the song", error);
  }
};

deleteSongIcons.forEach((icon) => {
  icon.addEventListener("click", () => deleteSongHandler(icon.dataset.songId));
});

//logic to handle like video with event listener and fetch request
for (i of favIcon) {
  i.addEventListener("click", function (e) {
    like(e.target.dataset.id);
  });
}

const like = async (id) => {
  const response = await fetch("/api/likes/videolike", {
    method: "POST",
    body: JSON.stringify({ video_id: parseInt(id) }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
};


// logic to handle like book with event listener and fetch request
const bookLikeHandler = async (bookId) => {
  try {
    const response = await fetch(`/api/likes/booklike`, {
      method: "POST",
      body: JSON.stringify({ book_id: parseInt(bookId) }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.ok
      ? console.log("Book liked")
      : console.error("Failed to like the book");
  } catch (error) {
    console.error("Error occurred while liking the book", error);
  }
};

likeBook.forEach((icon) => {
  icon.addEventListener("click", () => bookLikeHandler(icon.dataset.bookId));
});


