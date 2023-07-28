---
title: "Ecological Tools"
layout: archive
permalink: /portfolio/
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.0"
  overlay_image: /hayes-glacier-ice.jpg
  caption: "Viedma Glacier, Argentina 2023"
  
excerpt: "Vignettes and resources to facilitate ecological research and communication"

---

{% include base_path %}

Producing realistic three-dimensional maps
===

<figure style="width: 800px" class="align-center">
  <img style='border:1px solid #000000' src="/images/tools/realistic_map_tutorial.jpg" />
  <figcaption>Map of Hidden Lake, Glacier National Park based on remotely sensed data.</figcaption>
</figure>



[This tutorial](https://github.com/foresthayes/realmaps) teaches how to combine high-resolution satellite data, digital elevation models, and simulated lighting to generate realistic three-dimensional maps.

High-resolution imagery from [Sentinel-2 satellites](https://sentinel.esa.int/web/sentinel/missions/sentinel-2) is wrangled using [Google Earth Engine](https://earthengine.google.com) and overlaid on a digital elevation model using the R package [rayshader](https://www.rayshader.com). Spatial data such as roads, trails, streams, and lakes are sourced from [OpenStreetMaps](https://www.openstreetmap.org/). Last, [rayshader](https://www.rayshader.com) is used to generate temporally accurate lighting conditions for a given date and time. Sequential maps can also be animated to produce a visualization of temporally dynamic lighting conditions.

Not only are these maps a great way to communicate research through enhanced understanding of study locales, the tools used in this tutorial are invaluable in facilitating access, generation, and visualization of spatial data that are fundamental to ecological research. [See the full tutorial on GitHub](https://github.com/foresthayes/realmaps)

-------------------------------------------------------------------------------

&nbsp;



Facilitating access to GPS collar data
===

Access to satellite-upload collar data is often hampered by antiquated software and unique procedures to access data from different GPS collar manufacturers. Simply accessing data can be a time consuming process. As a collaborative project at the University of Montana, I worked on development of the [collar R package](https://github.com/Huh/collar) which facilitates access and wrangling of data from ATS, Vectronics, and Lotek, and loose csv files. The package is currently maintained and advanced by [Josh Nowak](https://github.com/Huh) and [Eric Newkirk](https://github.com/ericnewkirk).

In brief, the package allows GPS collar data to be downloaded directly through Program R. This enables rapid retrieval of animal locations (e.g., for ongoing studies) from multiple collar manufacturers. Through automated (i.e., untended) download of data and creation of gpx files, this package can easily be used to distribute near real-time location data to researchers in the field.
