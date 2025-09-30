const getImagePath = (ImagePath?: string, fullsize?: boolean) => {
    return ImagePath
    ? `https://image.tmdb.org/t/p/${fullsize ? 'original' : 'w500'}${ImagePath}`
    : "https://links.papareact.com/ua6"
}
export default getImagePath;