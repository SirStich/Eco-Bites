const blogEntries = [
    {
        id: "1",
        title: "Cupcakes nach jeder Art",
        created: "12/3/24",
        author: "N/A",
        img: "Blog-Header",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales et est nec viverra. Donec.",
    },
    {
        id: "2",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales et est nec viverra. Donec.",
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
    blogEntries.forEach(el => {

        featuredBlogsContainer.appendChild(createFeaturedBlogUI(el));
    })
}

function createFeaturedBlogUI(blog) {
    const container = document.createElement("div");
    container.className = "featured-blog";
    const imgElement = document.createElement("img");
    imgElement.src = `../assets/images/${blog.img}.png`;  // Added blog image
    const titleElement = document.createElement("h4");
    titleElement.className = "title";
    titleElement.innerText = blog.title;
    container.append(imgElement);
    container.append(titleElement);
    console.log(container);
    return container;
}

loadFeaturedBlogs();