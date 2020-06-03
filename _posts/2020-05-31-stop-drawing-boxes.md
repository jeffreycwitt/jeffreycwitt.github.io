---
layout: post
title:  "Stop drawing boxes: automating IIIF annotations through text objects"
date:   2020-06-03
comments: true
description: "a post on automating meaningful, comparable, IIIF annotations by abstracting from canvas annotations and focusing on text objects as annotation intermediaries. "
tags: scta iiif
---

# Introduction

In this short post, I want to share with the IIIF manuscript community some of the research possibilities that IIIF enables. 

But I also want to be a little provocative and point out that IIIF alone does not automatically guarantee these outcomes. Much depends on how we use IIIF in the midst of larger data modeling and data workflows. 

More specifically, genuine research advances depend on the kinds of annotations we make and the kinds of relationships that are created through these annotations.

I titled this post "stop drawing boxes" to address the understandable temptation that most IIIF viewers create to directly annotate transcriptions of text objects onto regions of a page. 

Most IIIF viewers privilege the book form, and thus they prioritize the hierarchy of the medium (books, quires, folios, and folio sides) over other hierarchies such as the hierarchy of the content carried (or manifested) by the medium. 

Without denying the value and importance of this perspective, a great deal of research is interested in manuscripts, because they function as forensic witnesses to something more abstract, namely the textual idea. 

But the material focus of these viewers (evidenced by their orientation around the "page" as the fundamental unit of presentation), combined with the easy to use annotation tools that accompany them, invites us to make transcription annotations about textual phenomenon through directly targeting a material region on a page rather than a textual idea.

For me, this is a conceptual confusion that at first seems benign but results in lost potential.

This loss of potential is to my mind a partial explanation for a complaint I hear from time to time within the IIIF community: namely, why haven't we been able to get more scholars excited about the potentials of IIIF? 

But I think we have to be honest. If we allow IIIF to become synonymous with zooming images or the mere ability to add comments to a page, then we do IIIF a disservice. Image navigation and direct annotation is not much different than the experience offered by a PDF or common desktop image software. But IIIF, combined with rigorous thinking/modeling of the content carried by the manuscript page, can enable much more. 

# Automated generation of meaningful comparison

Thus, let me offer one concrete example. 

A selling point of IIIF and a viewer like Mirador to the manuscript community is the possibility of enhanced comparison that should enhance research. 

Such comparison is common work in the world of forensic critical textual studies and in source identification work, i.e. tracking the original composition and re-use of textual passages, from biblical passages, to Aristotelian quotations, or to passage re-use among contemporaries and colleagues.

As evidence here, I point to an article from 2008 by Venicio Marcolino.

In the image below Marcolino attempts to trace and identify parallels between two texts in the fourteenth century, each of which survive in manuscript witnesses, one at the British Library, the other at the BSB.

![Marcolino picture]({{ site.assets_url }}gracilisBaselIIFPost/marcolinoConnections.png)

Thanks to IIIF, it is easy to bring these witnesses together.

![mirador with manuscripts: gracilis and Basel]({{ site.assets_url }}gracilisBaselIIFPost/gracilis-basel-thumbnails.png)

But it doesn't automatically make comparison easy. These are large manuscripts filled with a lot of content. It takes a tremendous amount of labor to find units of texts within each respective manuscript to create meaningful comparison. 

One might object that this where a table of contents can help us facilitate comparison.

![table of contents of gracilis and basel]({{ site.assets_url }}gracilisBaselIIIFPost/gracilis-basel-toc.png)

But this misses the point for two reasons. 

First because the points of comparison pointed to here are granular and precise. Even a very precise table of contents (which when done manually is unrealistic to expect) typically only gets us to a page on which a text object is somewhere to be found, which then must be again discovered in a separate manuscript on a separate folio in order for the comparison to be made. (The orientation here is to discover pages when the users really want to find textual ideas.)

Once found, the temptation is to "draw a box" and mark the conceptual point of comparison. 

![making direct annotations]({{ site.assets_url }}gracilisBaselIIFPost/gracilis-basel-box-annotations.png)

This is my plea. Please don't do this!

Think about what you are you trying to mark. There is a better way.

This leads to the second reason the objection about using a table of contents misses the point.

Comparison facilitated via table of contents navigation or direct image region annotation misses the point because the entire approach is predicated on the underlying assumption that a human being has already discovered the points of comparison and now we simply want to record what we already know with the book page coordinate system.

The ability to record this is a valuable thing that IIIF lets you do. But I wouldn't regard it as earth shattering. It is certainly something I could approximate with a PDF, and if I'm a researcher with an already established practice of using PDFs to mark my discoveries, I'm unlikely to change my practice just because IIIF sounds cooler than PDF.

However, IIIF, accompanied by the right kind of textual modeling, can do much more. 

It can be a piece in a larger workflow that enables the **automated** discovery and annotating of granular and directly comparable image units.

By focusing our transcription annotations on text objects rather than image regions, we can automate the discovery of textual parallels and then trace these parallels back to the media that manifest or carry them.

Modern computer vision algorithms are fairly reliable at capturing the lines of a text, so let's let the computer do this work. 

But they are not going to capture textual units that are not represented visually. 

So let's separate this work. Instead of attaching text transcriptions to lines, let's attach our transcriptions to textual units and then map those units to lines. 

![image of lines to manifestations and expression]({{ site.assets_url }}textExpansion/Folie7.png)

From here, as the above image shows, we can easily move from any textual object to any corresponding regions on any sister witnesses to the same textual idea. 

Further, as seen below, as we discover other kinds of parallels between textual ideas, we can move out to these as well and discover where these textual ideas manifest themselves in corresponding witnesses.

![images of expressions to expressions out to manifestation and lines]({{ site.assets_url }}textExpansion/Folie9.png)

Now that we have the transcription organized according to textual units rather than broken up by the material line, we can automate the comparison of logical chunks.

The script below loops over all the paragraph chunks in the Gracilis text and calculates a comparison to every paragraph chunk in the Basel text.

![python script generating n-gram similarity]({{ site.assets_url }}gracilisBaselIIIFPost/gracilis-basel-annotation-generation.png)

Results could be output as annotations, which can be loaded into a viewer.

![import annotation list in lbp-web]({{ site.assets_url }}gracilisBaselIIIFPost/load-annotations.png)

Text transcriptions can then be easily compared at a granular level to inspect the results. 

![check text comparison with custom addition]({{ site.assets_url }}gracilisBaselIIIFPost/text-collation.png)

For each of the 22 total parallels identified by Marcolino, the computer first discovered between 1 and 9 possible Basel matches out of a possible 1,227. After filtering by the highest percentage matches per paragraph, the computer correctly identified 19 out of the 22 connections. But this high percentage of 86% also hides the fact that in many cases the computer has identified matching passages with much more precision than Marcolino, and even on one occasion corrected parallels asserted by Marcolino. 

And accordingly, by targeting a text passaged that can be mapped to each other and manuscript regions, we can easily move from here to each of the precise image regions carrying/manifesting this text passage. See below.

![check image compare with custom image]({{ site.assets_url }}gracilisBaselIIIFPost/gracilis-basel-image-comparison.png)

I would like to stress here that the regions coordinates seen here were never manually mapped. They were constructed from combining the auto-generated line coordinates with the semantic structuring of the content text into logical chunks.

In this way, these results, unlike Marcolino's, are fully transparent. I've not only discovered in seconds nearly all the connections asserted by Marcolino with more specificity, but I've also in the very same act connected the manuscripts from the BSB and the British Library at a useful level of specificity. 

Finally, we might note how this could scale. 

Here, I've run the same n-gram similarity algorithm for a verse in the Bible Hebrews 11:1. 

These results can be confirmed and then be indexed. Now I not only have a corpus index of texts that cite Hebrews 11:1, but I also have at the same time a global index of manuscript regions that target the precise lines where this quotation appears. 

![Gif of hebrews 11_1 index search]({{ site.assets_url }}gracilisBaselIIIFPost/hebr11_1-index-with-images.gif)

All of this without ever drawing a box!

In short, what we see here is a reversal in the traditional path of discovery. In the pursuit of viewing a particular quotation, we normally use the reference system of manuscript number, and then a folio number, and then perhaps, if we are lucky a line number. 

Instead, we are now targeting the quotation directly as a textual idea, which can then self-report on what regions, pages, or manuscripts it may be found.