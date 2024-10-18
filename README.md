<h1>Shopify to Shopware Exporter</h1>

<p>Een tool om producten, klanten en bestellingen van Shopify te exporteren en in Shopware te importeren.</p>

<h2>Inhoudsopgave</h2>
<ul>
    <li><a href="#introductie">Introductie</a></li>
    <li><a href="#functies">Functies</a></li>
    <li><a href="#vereisten">Vereisten</a></li>
    <li><a href="#installatie">Installatie</a></li>
    <li><a href="#configuratie">Configuratie</a></li>
    <li><a href="#gebruik">Gebruik</a></li>
    <li><a href="#probleemoplossing">Probleemoplossing</a></li>
    <li><a href="#bijdragen">Bijdragen</a></li>
    <li><a href="#licentie">Licentie</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>

<h2 id="introductie">Introductie</h2>
<p>De <strong>Shopify to Shopware Exporter</strong> is een hulpmiddel ontworpen om de migratie van gegevens van een Shopify-winkel naar het Shopware-platform te vereenvoudigen. Het stroomlijnt het proces van het overzetten van producten, klanten en bestellingen, waardoor de dataintegriteit wordt gewaarborgd en de tijd en moeite voor handmatige migratie wordt verminderd.</p>

<h2 id="functies">Functies</h2>
<ul>
    <li><strong>Product Export/Import</strong>: Transfer van alle productdetails, inclusief afbeeldingen, beschrijvingen, prijzen en voorraadniveaus.</li>
    <li><strong>Klantgegevens Migratie</strong>: Verplaats klantinformatie zoals namen, contactgegevens en adressen.</li>
    <li><strong>Bestelgeschiedenis Overdracht</strong>: Migreer bestelinformatie om verkooprecords en aankoopgeschiedenis van klanten te behouden.</li>
    <li><strong>Data Mapping</strong>: Geautomatiseerde mapping tussen Shopify en Shopware datastructuren.</li>
    <li><strong>Foutafhandeling</strong>: Uitgebreide logging om migratieproblemen te identificeren en op te lossen.</li>
</ul>

<h2 id="vereisten">Vereisten</h2>
<ul>
    <li><strong>Node.js</strong> (v12 of hoger)</li>
    <li><strong>NPM</strong> of <strong>Yarn</strong></li>
    <li><strong>Shopify API-referenties</strong>: API-sleutel en wachtwoord</li>
    <li><strong>Shopware API-referenties</strong>: API-URL, Client ID en Client Secret</li>
</ul>

<h2 id="installatie">Installatie</h2>
<ol>
    <li><strong>Kloon de repository</strong>
        <pre><code>git clone https://github.com/armfuls/Shoppify-to-shopware-exporter-.git</code></pre>
    </li>
    <li><strong>Navigeer naar de projectdirectory</strong>
        <pre><code>cd Shoppify-to-shopware-exporter-</code></pre>
    </li>
    <li><strong>Installeer afhankelijkheden</strong>
        <pre><code>npm install
# of
yarn install</code></pre>
    </li>
</ol>

<h2 id="configuratie">Configuratie</h2>
<ol>
    <li><strong>Hernoem het voorbeeldconfiguratiebestand</strong>
        <pre><code>mv config.example.json config.json</code></pre>
    </li>
    <li><strong>Bewerk het configuratiebestand</strong>
        <p>Open <code>config.json</code> en voer je Shopify en Shopware API-referenties in.</p>
        <pre><code>{
  "shopify": {
    "apiKey": "your_shopify_api_key",
    "password": "your_shopify_api_password",
    "storeName": "your_shopify_store_name"
  },
  "shopware": {
    "apiUrl": "your_shopware_api_url",
    "clientId": "your_shopware_client_id",
    "clientSecret": "your_shopware_client_secret"
  }
}</code></pre>
    </li>
</ol>

<h2 id="gebruik">Gebruik</h2>
<ol>
    <li><strong>Start de exporter</strong>
        <pre><code>npm start
# of
yarn start</code></pre>
    </li>
    <li><strong>Selecteer de te migreren gegevens</strong>
        <p>Volg de prompts op het scherm om te selecteren welke gegevens je wilt migreren (producten, klanten, bestellingen).</p>
    </li>
    <li><strong>Volg het proces</strong>
        <p>De terminal zal voortgangsupdates weergeven. Logs worden opgeslagen in de <code>logs</code> directory.</p>
    </li>
</ol>

<h2 id

