---
layout: layout-main.njk
title: Home
eleventyNavigation:
  key: Home
  order: 1
---

<div class="container my-3">

<h1 class="visually-hidden">Stefan Bohacek</h1>

<h2 id="biography" class="fs-1 mb-5 text-body"><a href="#biography">Biography</a></h2>


[Stefan Bohacek](https://stefanbohacek.com/) <span class="text-muted">[stefn bo-haa-check]</span> is a hobby music producer and composer currently living in New Jersey, USA. His music has been featured on [Radio Free Fedi](https://radiofreefedi.net/), the [NHAM Mixtape #6](https://nham.co.uk/2024/11/november-heralds-audio-masters-nham-mixtape-6/), [BlowUpRadio.com](https://blowupradio.com/den/2025/020325.html), [Audio Interface's *Forgotten Futures*](https://www.audiointerface.org/shows/forgotten-futures/20241201/), and [Ether Diver's *Other People's Music* mixtape ](https://www.etherdiver.com/2024/05/17/opm-four-flavors-of-electronic-and-one-weird-trip/).

Stefan is also a member of [Secret Deal](https://secretde.al/), a joint effort with Sam [@ethicalrevolution](https://climatejustice.social/@ethicalrevolution), and likes to participate in [music challenges](https://stefanbohacek.com/tag/music-challenges-and-contests/).

<div class="text-center my-5">
  <a href="/assets/photos/stefan-on-a-boat-2019.jpg">
    <img src="/assets/photos/stefan-on-a-boat-2019.jpg" title="Stefan on a boat" alt="A cropped photograph of Stefan, a 30-something white man, viewed from a side at an angle, smiling and bending over." class="img-fluid img-thumbnail mx-auto" width="200" height="200">
  </a>
</div>

<h2 id="music" class="fs-1 my-5 text-body"><a href="#music">Stefan's music</a></h2>

Stefan draws heavy inspiration from disco, R'n'B, and hip-hop, resulting in danceable grooves, sometimes with a tint of melancholy. He's also composed electronic and orchestral soundtrack music.

Here's where you can find his work online.

- [SoundCloud](https://soundcloud.com/stefanbohacek)
- [Bandcamp](https://stefanbohacek.bandcamp.com/)
- [Bandwagon](https://bandwagon.fm/@stefan-bohacek)
- [Mirlo](https://mirlo.space/stefan)


</div>

<div class="container-fluid my-5">
  <div class="row mt-5">
  {% for song in music %}<div class="col-12 col-md-6 col-lg-6 col-xl-3 position-relative">
    <div class="container-fluid ps-0">
    <div class="bg-body-tertiary px-4 py-2 m-2 rounded-5">
        <div class="row mt-3">
          <div class="col-6">
            <a href="{{ song.links[0].url }}" class="text-body">
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
                <a class="fs-9 text-body" href="{{ link.url }}">{{ link.title }}</a>
              </li>{% endfor %}
            </ul>
          </div>
        </div>
        <div class="position-absolutex bottom-0 mt-3">
          <audio controls class="w-100 mt-4">
            <source src="/assets/audio/{{ song.id }}.mp3" />
          </audio>
        </div>
      </div>
    </div>
  </div>{% endfor %}
</div>
