---
layout: post
title:  "SCTA und Topic Modelling: ein DAAD Bericht"
date:   2018-10-15
comments: true
description: "Ein Bericht auf Experimenten mit der Anwendung von Top Modelling auf dem SCTA Korpus"
tags: scta deutsch
---

SCTA und Topic Modelling: ein DAAD Bericht

Mit der Explosion von Daten wird die Frage der Zukunft nicht sein, “Ist dieser Text oder sind diese Daten verfügbar?”, sondern “Können wir diesen Text oder Text-Teil finden in dem Stapel dessen, was verfügbar ist?”

Die wissenschaftliche Gemeinde lagert diese Aufgabe der adäquaten Auswahl von Informationen auf eigene Gefahr aus. Wenn Daten theoretisch verfügbar sind, aber noch nicht auffindbar, dann ist dies ein Problem von Kuration. Wenn wir tausende oder sogar Millionen Ergebnisse haben, können wir nicht alle diese Ergebnisse untersuchen. Wir müssen auswählen und das ist Kuration. Kuration ist eine Art von Auswahl beruhend auf Grundsätzen. Wissenschaftliche Entdeckung fordert Kuration beruhend auf wissenschaftlichen Grundsätzen. Diese Kuration auszulagern und zum Beispiel Google zu überlassen, heißt, mit unwissenschaftlichen Ergebnissen zu arbeiten. Wir, die Fachleute, müssen die Verantwortung wieder übernehmen, die neuen digitalen Ansätze zu lernen und anzuwenden, so dass wir in der Lage sind, an der Aufgabe von Kuration teilzunehmen.

Mithilfe des Deutschen Akademischen Austausch-Dienstes habe ich als Leiter des SCTA (Scholastic Commentaries and Texts Archive, https://scta.info) einen ersten Schritt in diese Richtung gemacht, einen ersten Versuch, diese Verantwortung zu übernehmen.

Am Anfang Oktober habe ich mit meinem Kollegen, Dr. Thomas Köntges, bei der Digital Humanities Lab an der Universität Leipzig, versucht, "Natural Language Processing", nämlich "Topic Modelling", Ansätze zu dem SCTA Korpus anzuwenden.

Der Grundidee ist, dass wir mit der Kombination von Computer Kraft und Fachkenntnis ein Profil jedes Absatzes in der Scholastik Corpus bauen können. Mit diesen Profilen können wir erwartete und unerwartete Verbindungen in den ganzen Korpus hindurch entdecken.

Keines würde möglich gewesen, ohne das Fachkenntnis und Zusammenarbeitung mit Dr. Thomas Köntges. Dr. Köntges hat eine wichtige Applikation entwickelt, die heißt "ToPan", mit der man den Text analysieren und "Topics" erschaffen könnte.

In dem Bild unten kann man sehen ein Beispiel eines Topics von Dr. Köntges Applikation "ToPan" erzeugt.

![Topan]({{ site.assets_url }}toPan-topic-modelling-viz.png)

Mit diesen Topics oder Thema kann man dann dieses Korpus unterscheiden und sortieren.

Die Frage is nur, wie kann man solches riesiges Korpus automatisch in diese Application füttern. Um das zu erschaffen, habe ich ein "CSV API" für das ganze SCTA-Korpus erzeugt. Diese API macht millionen von scholastikern Lateinischen Wörter verfügbar in einer Form, die eine Applikation wie "ToPan" verstehen kann.

Der nächste Schritt, bevor diese Ergebnisse nützlich sein werden, ist diese Ergebnisse in solche Art und Weise zu veröffentlichen, dass sie von anderer "Client Applications" gebrauchen werden könnten. Dr. Köntges hat schon noch eine Applikation entwickelt, heißt Metallo, um diese Ergebnisse darzustellen. Zusammen haben wir diese Applikation modifiziert, so dass es die Ergebnisse verfügbar als nützlich Daten machen kann, nämlich als "JSON data".

Mit diesen Schritten erledigt, waren wir jetzt in der Lage, diese Ergebnisse zu benutzen, um unseren Text und Suchdienst zu erhöhen.

Die offensichtlichste Anwendung von diesen Absatz-Profilen ist Nutzern zu erlauben Suchergebnisse nach Topic zu gliedern und sortieren. In dieser Art und Weise vermeiden wir unwissenschaftlichen Gebrauch von Suchergebnisse, worin wählen wir nur die erste Suchergebnisse, weil sie erst vorkommen, und nicht, weil sie die Beste sind oder sie mit unsere Forschung best passen.

Zum Beispiel, in dem ersten Bild unten, kann man sehen eine Liste von unsortierte Suchergebnisse. Der Suchdienst hat das Ergebnis "potentia absoluta" in vielen verschiedenen Absätzen gefunden, aber das Absatz-Profil und ein verbundenes Topic schlagen vor, dass diese Absätze benutzen dieselbe Phrase, "potentia absoluta", in drei verschieden Diskussionen. Ein einfaches Beispiel sein würde, eine rohe Suche für das Wort, "Leiter", die Absätze zurücksenden, die etwas mit sowohl einem Bergsteiger als auch einem Chef von einem Geschäft zu tun haben. Mit der Hilfe von Topic Modelling, können wir diese verschiedenen Diskussionen sortieren, als man in dem zweiten Bild sehen kann.

![TopicModellingSearchResults1]({{ site.assets_url }}lbp-topic-modelling-search-results1.png)

Hier kann ein Nutzer ein Topic auswählen und nur die Absätze sehen, die etwas mit dieser Diskussion zu tun hat.

![TopicModellingSearchResults1]({{ site.assets_url }}lbp-topic-modelling-search-results2.png)

Aber die Sortierung von Suchergebnisse ist nur der Anfang.

Mit der Hilfe von einem Profil für jeden Absatz, zielen wir darauf, einen Empfehlungsdienst zu bauen. Solcher Dienst sollte einen traditionellen Anspruch erfüllen, nämlich, die Fähigkeit Nutzern auf verknüpften Diskussionen zu zu steuern.

In dieser Bild können wir sehen, dass das ein traditionelles Ziel ist.

Cremona 1618
https://books.google.com/books?id=h2IUiZ6aYZUC&pg=PA66#v=onepage&q&f=false

![TopicModellingSearchResults1]({{ site.assets_url }}scholion-cremona1618-example)

Viel mehr Beispiele von dem 16 und 17 Jahrhundert könnten gefunden werden.

Aber der Anspruch hat wohl in die modernische Zeit angehaltet.

Das Skolion der Ausgabe von Bonaventure von dem spät 19 Jahrhundert ist ein treffliches Beispiel.

![TopicModellingSearchResults1]({{ site.assets_url }}bonaventure_scholion.png)

Diese Arten von Verbindungen sind wichtig. Sie machen uns den größeren Zusammenhang bewusst. Einige Verbindungen könnte ein Fachmann / eine Fachfrau vorhersehen. Wir können erwarten, dass ein Kommentar zu Distinctio 17 sich auf viele andere Kommentare zu Distinctio 17 beziehen kann.

Aber unsere Erwartungen sind auch unsere Grenze, denn wir suchen Verbindungen nur dort, wo wir diese erwarten. Und offensichtlich bleiben uns jene Verbindungen verborgen, die wir nicht erwarten.

Die Hilfe, hier von wohlmeinenden Herausgebern zur Verfügung gestellt, gibt uns nur ein Muster von Verbindungen. Diese ist jedoch keineswegs umfassend oder wissenschaftlich. Sie ist nur eine Auswahl, die auf den Vorlieben des Herausgebers beruht. Und obwohl diese Auswahlen oft hilfreich sein könnten, steuern sie trotzdem die Richtung aller nachfolgenden Forschung, entgegen jeder Forderung von Wissenschaft oder historischer Genauigkeit. Ist der Verweis in der Bonaventura Skolion auf die parallele Diskussion in Gregory Biel nur da, weil diese in Biel eng verbunden mit jener in Bonaventure ist? Enger oder wichtiger als alle Diskussionen, die zwischen der Zeit Bonaventures und der Zeit Biels (fast zweihundert Jahre) stattgefunden haben, die trotzdem nicht erwähnt sind? Es ist wahrscheinlicher, dass Biel im Kopf des Herausgebers einer der “Big Guys”, einer der “wichtigen Scholastiker,” ist und deshalb ist ihm diese Diskussion bewusst. Dieser Prozess allerdings ist ein Teufelskreis. Biel ist gelistet, während viele andere spätere Scholastiker nicht gelistet sind, weil der Herausgeber glaubt, dass Biel wichtiger ist. Nachforscher sehen diese Liste und orientieren ihre Arbeit daran. Aufgrund der begrenzten Zeit entscheiden sich die nachfolgenden Forscher von diesem Skolion, die Diskussion von Biel zu untersuchen und übersehen die anderen Diskussionen. Also geht der Kreis weiter und unweigerlich entdecken wir nur, was unsere bisherigen Entscheidungen uns erlauben zu entdecken.

Was wir brauchen, ist ein wissenschaftlicherer und unfassenderer Ansatz: ein Ansatz, der die Diskussionen enthüllt, die von unseren Vorurteilen versteckt werden.

“Topic Modelling” kann uns hier helfen. Mit der Hilfe gewaltiger Computerrechenleistung können wir die Relevanz jedes Absatzes betrachten; nicht nur die Absätze, die uns schon bekannt sind. Der Computer kann ein Profil von jedem Absatz bauen und wir können dieses Profil benutzen, um verbundenen Passagen zu empfehlen und anzuzeigen.

Während meiner Zeit in Leipzig habe ich mit Dr. Köntges ein Beispiel entworfen, um diese Möglichkeiten zu demonstrieren.

Unten kann man sehen, was passiert, wenn man nach mehr Information über diesen Absatz fragt. Zunächst bekommt man eine Liste von Absätzen mit einer direkten Verbindung zum entsprechenden Absatz. Diese Verbindungen sind die gefundenen Ergebnisse eines Forschers. z.B. dieser Absatz zitiert den Anderen und so weiter.

Aber unten ist eine neue Liste von verbundenen Absätzen, dessen Verbindungen von Computer bestimmt wurden. Und in diesem Fall hat der Computer das ganze Korpus analysiert und deshalb kann er Passagen empfehlen, die jenseits der Vorurteile des Herausgebers bestehen.

Und abermals, in demselben Bild können wir diese in Beziehung stehende Absätze in einer graphischen Darstellung.

![TopicModellingSearchResults1]({{ site.assets_url }}lbp-recommendations-by-topic.gif)

In der Zukunft planen wir beide Ansätze immer enger zusammenzubringen, so dass wir durch die Kombination von Eigenschaften, die von den Forschern erzeugt wurden, und jenen, die vom Computer erzeugt wurden, einen effektiven Empfehlungsdienst erschaffen können: einen Dienst, der uns erlaubt, die Verbindungen den ganzen Korpus hindurch in einer wissenschaftlichen und umfassenden Weise zu sehen.
