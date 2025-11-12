---
layout: layout-main.njk
title: Home
eleventyNavigation:
  key: Home
  order: 1
---

<h1 class="text-center mt-4 mb-5">Stefan Bohacek's music portfolio</h1>

<div class="container-fluid my-5">
  <div class="row my-5">
  {% for song in music %}<div class="col-12 col-md-6 col-lg-6 col-xl-3 position-relative">
    <div class="container-fluid ps-0">
    <div class="bg-body-tertiary px-4 py-2 my-2 rounded-5">
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
          <div class="col-6 ps-0">
            <p>
              <strong>{{ song.title }}</strong>
            </p>
            <ul class="mt-3 ps-4">
              {% for link in song.links %}<li>
                <a title="Listen on {{ link.title }}" class="fs-9 text-body" href="{{ link.url }}">{{ link.title }}</a>
              </li>{% endfor %}
            </ul>
          </div>
        </div>
        <div class="position-absolutex bottom-0 mt-3">
          <audio data-matomo-title="{{ song.title }}" controls class="w-100 mt-4">
            <source src="/assets/audio/{{ song.id }}.mp3" />
          </audio>
        </div>
      </div>
    </div>
  </div>{% endfor %}
</div>

<div class="container my-3">

<h2 id="biography" class="fs-1 mb-5 text-body"><a href="#biography">Biography</a></h2>

[Stefan Bohacek](https://stefanbohacek.com/) <span class="text-muted">[stefn bo-haa-check]</span> is a music producer and composer currently living in New Jersey, USA. His music has been featured on:

<ul class="column-list ps-4">
  <li><a href="https://radiofreefedi.net/">Radio Free Fedi</a> and the Radio Free Fedi-inspired <a href="https://nham.co.uk/2025/03/comfy-collaborations-album-review/">Comfy Collaborations</a></li>
  <li><a href="https://theindiebeat.fm/">The Indie Beat Radio</a></li>
  <li><a href="https://blowupradio.com/den/2025/020325.html">BlowUpRadio.com</a></li>
  <li>the Mirlo <a href="https://mirlo.space/team/release/double-time"><em>Double Time</em></a> compilation (as Secret Deal with <a href="https://climatejustice.social/@ethicalrevolution">Sam</a> and <a href="https://chaos.social/@axwax">AxWax</a>)</li>
  <li>the <a href="https://nham.co.uk/2024/11/november-heralds-audio-masters-nham-mixtape-6/">NHAM Mixtape #6</a></li>
  <li><a href="https://www.audiointerface.org/shows/forgotten-futures/20241201/">Audio Interface&#39;s <em>Forgotten Futures</em></a></li>
  <li>and <a href="https://www.etherdiver.com/2024/05/17/opm-four-flavors-of-electronic-and-one-weird-trip/">Ether Diver&#39;s <em>Other People&#39;s Music</em> mixtape </a></li>
</ul>

Stefan is also a member of [Secret Deal](https://secretde.al/), a joint effort with Sam [@ethicalrevolution](https://climatejustice.social/@ethicalrevolution). Stefan likes to participate in [music challenges](https://stefanbohacek.com/tag/music-challenges-and-contests/) and manages the [Looptober community website](https://looptober.neocities.org/).

<div class="text-center my-5">
  <a href="/assets/photos/stefan-on-a-boat-2019.jpg">
    <img src="/assets/photos/stefan-on-a-boat-2019.jpg" title="Stefan on a boat" alt="A cropped photograph of Stefan, a 30-something white man, viewed from a side at an angle, smiling and bending over." class="img-fluid img-thumbnail mx-auto" width="200" height="200">
  </a>
</div>

<h2 id="music" class="fs-1 my-5 text-body"><a href="#music">Stefan's music</a></h2>

Stefan draws heavy inspiration from disco and pop music, blending samples and virtual synths, resulting in danceable grooves, often with a tint of melancholy. He's also composed electronic and orchestral [soundtrack music](https://soundcloud.com/stefanbohacek/sets/orchestral-cinematic-instrumental).

Here's where you can find his work online.

- [SoundCloud](https://soundcloud.com/stefanbohacek)
- [Bandcamp](https://stefanbohacek.bandcamp.com/)
- [Bandwagon](https://bandwagon.fm/@stefanbohacek)
- [Mirlo](https://mirlo.space/stefan)

</div>
