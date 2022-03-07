import loadable from "@loadable/component";

const ErrorBoundary = loadable(() => import("./errorBoundary"), {
    fallback: null
});
const Loading = loadable(() => import("./loading"), {
    fallback: null
});
const SideBar = loadable(() => import("./sideBar"), {
    fallback: null
});

// *********************** Icon **********************
const SpotifyIcon = loadable(() => import("./svgs/spotifyIcon"), {
    fallback: null
});
const HomeIcon = loadable(() => import("./svgs/homeIcon"), {
    fallback: null
});
const LibraryIcon = loadable(() => import("./svgs/libraryIcon"), {
    fallback: null
});
const SearchIcon = loadable(() => import("./svgs/searchIcon"), {
    fallback: null
});
const AddPlaylistIcon = loadable(() => import("./svgs/addPlaylistIcon"), {
    fallback: null
});
const LikedPlaylistIcon = loadable(() => import("./svgs/likedPlaylistIcon"), {
    fallback: null
});

export { 
    ErrorBoundary,
    Loading,
    SideBar,
    SpotifyIcon,
    HomeIcon,
    LibraryIcon,
    SearchIcon,
    AddPlaylistIcon,
    LikedPlaylistIcon
};
