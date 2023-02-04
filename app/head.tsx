export default function Head() {
  return (
    <>
      <title>Ohmoji 🙂</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="keywords"
        content="ohmoji, emoji, emoticon, icon, sticker, chat, social media, fun, communication, online messaging"
      ></meta>
      <meta
        name="description"
        content="A fun and interactive emoji collection website for sharing and copying your favorite emojis."
      />
      <meta property="og:title" content="Ohmoji" />
      <meta property="og:url" content="https://ohmoji.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="A fun and interactive emoji collection website for sharing and copying your favorite emojis."
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://ohmoji.vercel.app/" />
      <meta property="og:title" content="Ohmoji" />
      <meta
        property="og:description"
        content="A fun and interactive emoji collection website for sharing and copying your favorite emojis."
      />
      <meta property="og:image" content="/assets/image.png" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="ohmoji.vercel.app/" />
      <meta property="twitter:url" content="https://ohmoji.vercel.app/" />
      <meta name="twitter:title" content="Ohmoji" />
      <meta
        name="twitter:description"
        content="A fun and interactive emoji collection website for sharing and copying your favorite emojis."
      />
      <meta name="twitter:image" content="/assets/image.png" />
    </>
  )
}
