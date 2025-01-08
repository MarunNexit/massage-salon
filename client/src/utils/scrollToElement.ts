export const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 150,
            behavior: "smooth",
        });
    }
};