---
layout: layout-main.njk
title: Home
eleventyNavigation:
  key: Home
  order: 1
---

<div class="container my-5">

<h1 class="text-center mb-5">Hi there 👋</h1>

I'm [Stefan](https://stefanbohacek.com/) *[stefn]*, a hobby music producer and composer currently living in New Jersey. You might've heard me on [Radio Free Fedi](https://radiofreefedi.net/), [Audio Interface's Forgotten Futures](https://www.audiointerface.org/shows/forgotten-futures/20241201/), or [Ether Diver's *Other People's Music* mixtape ](https://www.etherdiver.com/2024/05/17/opm-four-flavors-of-electronic-and-one-weird-trip/).

Here's where you can find my work:

- [SoundCloud](https://soundcloud.com/stefanbohacek)
- [Bandcamp](https://stefanbohacek.bandcamp.com/)
- [Bandwagon](https://bandwagon.fm/@stefan-bohacek)
- [Mirlo](https://mirlo.space/stefan)

Also check out [Secret Deal](https://secretde.al/), a new joint effort with Sam [@ethicalrevolution](https://climatejustice.social/@ethicalrevolution), and some of the [music challenges](https://stefanbohacek.com/tag/music-challenges-and-contests/) I've joined.

</div>

<div class="container-fluid my-5">
  <div class="row mt-5">
  {% for song in music %}<div class="col-12 col-md-6 col-lg-6 col-xl-3 position-relative">
    <div class="row mt-5">
      <div class="col-6">
        <a href="{{ song.links[0].url }}" class="text-body-secondary">
          <img
            loading="lazy"
            width="800"
            height="800"
            class="cover-art img-fluid w-100"
            src="/assets/covers/{{ song.id }}.png"
          {% if song.cover_art_description %}alt="{{ song.cover_art_description }}"{% else %}alt="Album cover" role="presentation"{% endif %}
          >
        </a>
      </div>
      <div class="col-6">
        <p>
          <strong>{{ song.title }}</strong>
        </p>
        <ul class="mt-3">
          {% for link in song.links %}<li>
            <a class="fs-9" href="{{ link.url }}">{{ link.title }}</a>
          </li>{% endfor %}
        </ul>
      </div>
    </div>
    <div class="position-absolutex bottom-0 mt-3">
      <audio controls class="w-100 mt-4">
        <source src="/assets/audio/{{ song.id }}.mp3" />
      </audio>
    </div>
  </div>{% endfor %}
</div>
