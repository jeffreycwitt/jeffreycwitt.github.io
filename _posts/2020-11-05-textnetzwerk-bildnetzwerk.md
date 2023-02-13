---
layout: post
title:  "Suchen und Finden von Bildern: Wie ein Text-Netzwerk ein Bild-Netzwerk werden kann"
date:   2020-11-05
comments: true
tags: scta iiif deutsch
---

In Bezug auf IIIF und Discovery will ich nur einen Gedanken vorbringen und diesen dann illustrieren.

“Discovery of IIIF Resources” (Bildfindung) ist momentan in der IIIF-Gemeinde ein wichtiges Thema. Aber diese Discovery ist normalerweise die Entdeckung eines Buches oder einer Seite innerhalb eines Buches. Ich kenne den Titel ein Buch oder Handschrift, wie kann ich jetzt dieses Buch mit IIIF sehen? Das ist die übliche Frage. 

Diese Fokussierung ist nachvollziehbar. Die IIIF Presentation API wurde schließlich für solche physischen Objekte gebaut. Und selbstverständlich zielen die ersten “Viewers” (die IIIF fördert) darauf, diese Objekte im virtuellen Raum zu zeigen. Das ist nicht falsch. Die Entdeckung eines IIIF Manifests bleibt wichtig.

Was ich hier vorbringen möchte, ist allerdings, dass diese Art von Entdeckung begrenzend ist. Sie begrenzt unsere Vorstellung davon, was ein Objekt ist oder sein kann. Und deswegen begrenzt sie unsere Vorstellung davon, was entdeckt werden kann und auf welchem Weg es entdeckt werden kann.

Wenn wir erkennen, dass der Inhalt eines Bildes (ich spreche hier von Bildern, die Texte beinhalten) mit Objekten in der Form von Text-Ideen erfüllt wird, dann werden wir neue Kandidaten für Entdeckungen finden.

Ich will Ihnen das zeigen. 

In diesem Fall beginne ich nicht mit Bildern, sondern mit Texten. Diese beinhalten sowohl verborgene Idee-Objekte (wie Zitate, Verweise, Abschnitte) als auch  Verhältnisse (wie Nächstes, Vorheriges, Zitiert von, Beeinflusst von, und so weiter).

![text network]({{ site.assets_url }}web.jpg)

Wenn wir unsere Texte in einer Weise herausgeben können, dass diese Text-Objekte erkannt und in “Machine Actionable” Ressourcen verwandelt wurden, dann haben wir ein Text-Netzwerk. Wir können diesem Netzwerk vorwärts und rückwärts folgen. 

So zum Beispiel, wenn ein Text “A” auf einen Bibel(f)vers B verweist oder ihn zitiert, wissen wir nicht nur, dass dieser Text diesen Bibelvers zitiert, sondern wir wissen auch, dass dieser Bibelvers B von Text A zitiert wurde. Das bedeutet, dass wir einen “bi (bee) direktionalen Link” haben. Und von dem Bibelvers B können wir alle Zitate dieses Verses in ihren historischen Verwendung sehen.

Nicht das:

![text network]({{ site.assets_url }}links/Folie1.png)

Aber das: 

![text network]({{ site.assets_url }}links/Folie2.png)

Aus diesen bidirektionalen Links entsteht ein Text-Netzwerk. Hier fragen wir beispielsweise nach jedem Zitat von einem Vers aus dem ersten Korintherbrief, Kapitel 13.

![ICor13 Netzwerk]({{ site.assets_url }}Icor13Network.gif)

Aber wir sind noch nicht fertig.

In der Textkritik ist es ein Ziel des Herausgebers, Transparenz zu erreichen. Der Herausgeber sucht nach den Zeugen für einen Text und arbeitet darauf hin, diesen Beweis dem Leser transparent zu machen. IIIF ist hierbei eine erhebliche Hilfe. Denn es gibt uns die Chance, mit Bildern diese Transparenz zu erhöhen. 

![Text Image Transparency]({{ site.assets_url }}PeterOfSpainBerlin-2019-09-20/PlaoulImageComparison.gif)

Aber was sind die Text-Zeugen? Aus einem historischen Blickwinkel ist die Bibel nicht nur der einzige Zeuge für einen Bibelvers. Jedes Zitat ist eine Art von Zeuge. Das Zitat ist ein Fenster dahin, wie ein Vers in einer spezifischen Zeit gesehen und gelesen wurde.

Aber wie können wir diese Zitate in einen kritischen Text bringen, und wie können wir die Bilder von diesen kleinen Zitaten, verborgen in vielen großen Bänden, entdecken?

Wenn wir uns vorstellen, dass ein Bild von einer Seite nicht ein einziges Bild ist, sondern eigentlich ein Behälter von einer unbegrenzten Menge von überlappenden, kleineren Bildern, dann haben wir neue Möglichkeiten: neue Ressourcen zu entdecken und neue Verbindungen zu schaffen.

Hier wird die IIIF Image API unumgänglich. Die IIIF Image API gibt uns die Möglichkeit, kleine Teile von einem großen Bild auszuwählen und viele verschiedene kleine Bilder zu schaffen.

Dann ist es möglich, mit unseren Text-Objekten und unserem Text-Netzwerk Verhältnisse zwischen einer Text-Idee und den entsprechenden kleinen Bildern, die diese Idee beinhalten, zu erschaffen. 

Eine Eigenschaft von einem Text-Objekt (Zitat) ist die Zeile innerhalb einer Seite, wo das Text- Objekt steht. Diese Information genügt, um automatisch kleine Bilder “on the fly” zu erschaffen.

Man kann diese Verbindung in dieser Folie sehen.

![text-line-alignment]({{ site.assets_url }}textExpansion/Folie8.png)
![text-line-alignment]({{ site.assets_url }}textExpansion/Folie9.png)

Mit diesen Verbindungen können wir unsere Kenntnis vom Text-Zitat Netzwerk nutzen, um all die Bilder-Zeugen von einem Bibelvers in einem Bild-Netzwerk zusammenzubringen, die durch die jahrhundertelange Geschichte von wissenschaftlichem Diskurs überall verstreut sind. 

Und das kann man hier sehen.  

![Icor13Pictures]({{ site.assets_url }}Icor13pictures.gif)

Das Gif oben zeigt mehr als 67 Zitate von mehr als 16 verschiedenen Autoren mit Bildern, die von mindestens 10 verschiedenen Institutionen stammen.

Jetzt, wenn man die Bibel liest, kann man automatisch jedes Zitat in der Zukunft der Textgeschichte sehen, vergleichen, und dann mit perfekter Transparenz die Bilder hinter jeder Transkription von einer IIIF Institutionen abrufen und direkt sehen.

Und gewiss können wir diesen Entdeckungsprozess in entgegensetzter Richtung nachvollziehen. Von dem Text jedes Bibelvers können wir zu den Bild-Fragment gehen, und davon zu der Seite (oder IIIF Canvas), wo das Fragment steht, und dann weiter zu dem Buch (oder IIIF Manifest), das die Seite beinhaltet.

![Icor13 to Book]({{ site.assets_url }}Icor13FragmentToBook.gif)