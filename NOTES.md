
// Header
1. W header  dodałem logo JS, zgodnie ze screenem. Folder images
2. Dodałem favicon.img

// Content
1. W pliku index.js otrzymujemy dane z  channels.json.  I przekazujemy do szablonu Html metodą renderingCards()
2. W metodzie numberWithCommas (plik index.js) dodajemy funkcyjność dla prawidlowego odtwarzania liczb na
    stronie zgodnie z taskiem.
3. 
    
// Search
1. W pliku search.js mamy funkcje dla wyszukiwania potrzebnych wyników zgodnie z potrzebami użytkownika
    za pomocą input.
2. Został dodany blok datalist dla pomocy w wyshukiwaniu.    

// Contrast
1. W header został dodany przycisk CONTRAST COLOR, który  dynamicznie odwróca kolory w aplikacji.

// Date 
1. W count.js została zainstalowana funkcja która przekazuje do localStorage date aktualnego wejscia
    oraz ostatniego, przy warunkach że to jest kolejna wizyta przez użytkownika.
     Pod kluczem number of page visit, licznik wejść  przez jakiegokolwiek użytkownika.
     Kożystamy z  API https://api.countapi.xyz/update/florin-pop-test/test-site/?amount=1 .
      Gdzie możemy ustawić liczbe +1 lub -1

// UTM
1. Do pliku utm.js zostałą zainicjalizowana zmienna utm, która pozwała na dodawanie utm'ema do każdego 
    adresu URL kanalu, po przejsciu na jego stronę, z aktualna czasem (zmienna date). 
   
// vender.css
1. Została zrobiona adaptatywna wersja aplikacji. 
2. Do testów używałęm preglądarke chrome i firefox.

-------------------------------------------------------------------------------------------------------------
// Z czym miałęm problem ?!
1. Po naciskaniu na button CLEAR, funkcja nie zwraca peirwotnego stanu channels, ale dodawszy lokalną zmienną program
    działa prawidlowo.
2. UTM - nigdy z tego nie korzystałem, ale przeczytałem documentacje  i teraz jest jasnę, dla czego słuzą. 

// Czego użyłem by w następny raz ?!
1. Użyłem by innego podejścia z realizacją pobierania danych i filtrowania. Rozumie że są leprzę rozwiązania.
2. Do zbierania plików js  użyłem by bundler parcel.
