const blogEntries = [
    {
        id: "1",
        title: "Blog 1",
        created: "12/3/24",
        author: "N/A",
        img: "Blog-Header",
        content: ""
    },
    {
        id: "2",
        title: "Blog 2",
        created: "12/4/25",
        author: "N/A",
        img: "Blog-Header",
        content: ""
    },
    {
        id: "3",
        title: "Blog 3",
        created: "12/5/26",
        author: "N/A",
        img: "Blog-Header",
        content: ""
    },
    {
        id: "4",
        title: "Blog 4",
        created: "12/6/27",
        author: "N/A",
        img: "Blog-Header",
        content: ""
    },
    {
        id: "5",
        title: "Blog 5",
        created: "12/7/28",
        author: "N/A",
        img: "Blog-Header",
        content: ""
    },
]

const featuredBlogsContainer = document.querySelector("#featured-blogs-container");

function loadFeaturedBlogs() {
    // Existing code
    // createFeaturedBlogUI(blogEntries[0]);
    featuredBlogsContainer.appendChild(createFeaturedBlogUI(blogEntries[0]));
}

function createFeaturedBlogUI(blog) {
    const container = document.createElement("div");
    container.className = "featured-blog";
    const imgElement = document.createElement("img");
    imgElement.src = `./assets/images/${blog.img}.png`;  // Added blog image
    const titleElement = document.createElement("h4");
    titleElement.className = "title";
    container.append(imgElement);
    container.append(titleElement);
    console.log(container);
    return container;
}

loadFeaturedBlogs();