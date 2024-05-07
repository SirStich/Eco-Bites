const blogEntries = [
    {
        id: "1",
        title: "Current Favorites",
        created: "12/3/24",
        author: "N/A",
        img: "colorful-cupcake.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales et est nec viverra. Donec.",
    },
    {
        id: "2",
        title: "Für anspruchsvolle Gaumen",
        created: "12/4/25",
        author: "N/A",
        img: "choco-cupcake.jpeg",
        content: ""
    },
    {
        id: "3",
        title: "Green Choices",
        created: "12/5/23",
        author: "N/A",
        img: "sustainable-farm.jpeg",
        content: ""
    },
    {
        id: "4",
        title: "New Flavor Alert",
        created: "12/6/27",
        author: "N/A",
        img: "new-flavor-cupcake.jpeg",
        content: ""
    },
    {
        id: "5",
        title: "To make your day, even more special.",
        created: "12/7/28",
        author: "N/A",
        img: "catering-cupcakes.jpeg",
        content: ""
    },
]

const featuredBlogsContainer = document.querySelector("#featured-blogs-container");

function loadFeaturedBlogs() {
    // Existing code
    // createFeaturedBlogUI(blogEntries[0]);
    blogEntries.forEach(el => {

        featuredBlogsContainer.appendChild(createFeaturedBlogUI(el));
    })
}

function createFeaturedBlogUI(blog) {
    const container = document.createElement("div");
    container.className = "featured-blog";
    const imgElement = document.createElement("img");
    imgElement.classList.add("recent-blog-img")
    imgElement.src = `../assets/images/${blog.img}`;  // Added blog image
    const titleElement = document.createElement("h4");
    // const contentElement = document.createElement("p");
    // contentElement.textContent = blog.content;
    titleElement.className = "title";
    titleElement.innerText = blog.title;
    container.append(imgElement);
    container.append(titleElement);
    // container.append(contentElement);

    console.log(container);
    return container;
}

loadFeaturedBlogs();