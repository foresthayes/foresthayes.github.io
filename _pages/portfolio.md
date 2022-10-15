---
title: "Ecological tools and analyses using Program R"
layout: archive
permalink: /portfolio/
header:
  overlay_color: "#000"
  overlay_filter: "0.3"
  overlay_image: /laramie-river.jpg
  caption: "Laramie River, Colorado, 2018"
  
excerpt: "Brief vignettes of tutorials and tools by Forest to facilitate ecological research"

---

{% include base_path %}

Producing realistic three-dimensional maps
===

![3d map of Hidden Lake, Glacier National Park](https://github.com/foresthayes/realmaps/blob/main/out/hidden_lake_aug1_10am.png?raw=true)

[This tutorial](https://github.com/foresthayes/realmaps) teaches how to combine high-resolution satellite data, digital elevation models, and simulated lighting to generate realistic three-dimensional maps.

High-resolution imagery from [Sentinel-2 satellites](https://sentinel.esa.int/web/sentinel/missions/sentinel-2) is wrangled using [Google Earth Engine](https://earthengine.google.com) and overlaid on a digital elevation model using the R package [rayshader](https://www.rayshader.com). Spatial data such as roads, trails, streams, and lakes are sourced from [OpenStreetMaps](https://www.openstreetmap.org/). Last, [rayshader](https://www.rayshader.com) is used to generate temporally accurate lighting conditions for a given date and time. Sequential maps can also be animated to produce a visualization of temporally dynamic lighting conditions.

Not only are these maps a great way to communicate research through enhanced understanding of study locales, the tools used in this tutorial are invaluable in facilitating access, generation, and visualization of spatial data that are fundamental to ecological research. [See the full tutorial on GitHub](https://github.com/foresthayes/realmaps)

&nbsp;

Facilitating access to GPS collar data
===

Access to satellite-upload collar data is often hampered by antiquated software and unique procedures to access data from different GPS collar manufacturers. Simply accessing data can be a time consuming process. As a collaborative project at the University of Montana, I worked on development of the [collar R package](https://github.com/Huh/collar) which facilitates access and wrangling of data from ATS, Vectronics, and Lotek, and loose csv files. The package is currently maintained and advanced by [Josh Nowak](https://github.com/Huh) and [Eric Newkirk](https://github.com/ericnewkirk).

In brief, the package allows GPS collar data to be downloaded directly through Program R. This enables rapid retrieval of animal locations (e.g., for ongoing studies) from multiple collar manufacturers. Through automated (i.e., untended) download of data and creation of gpx files, this package can easily be used to distribute near real-time location data to researchers in the field. I have not fully written a tutorial for this but, if you would like to employ this approach, am happy to answer questions and provide guidance via <a href="mailto:forest.hayes@colostate.edu">email</a>.
