/// <reference types="@sanity-codegen/types" />

declare namespace Sanity {
  namespace Schema {
    /**
     * Person
     */
    interface Person extends Sanity.Document {
      _type: "person";

      /**
       * Navn - `String`
Nødvendig
       */
      name?: string;

      /**
       * Slug (brukernavn) - `Slug`
Nødvendig
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Main image - `Image`
Nødvendig
       */
      mainImage?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };

      /**
       * Tildelinger - `Array`
Nødvendig
       */
      titles?: Array<Sanity.Keyed<Award>>;

      /**
       * Foreninger/organisasjoner - `Array`
       */
      associations?: Array<Sanity.KeyedReference<Association>>;
    }

    /**
     * Forening/Organisasjon
     */
    interface Association extends Sanity.Document {
      _type: "association";

      /**
       * Navn - `String`
Nødvendig
       */
      name?: string;

      /**
       * Forkortelse - `String`
       */
      short?: string;

      /**
       * Aktiv - `Boolean`
       */
      active?: boolean;

      /**
       * Slug - `Slug`
Nødvendig
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Nettside - `Url`
       */
      url?: string;

      /**
       * Description - `Array`
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;

      /**
       * Tidligere kjent som - `Reference`
       */
      previous?: Sanity.Reference<Association>;
    }

    /**
     * Tittel
     */
    interface Title extends Sanity.Document {
      _type: "title";

      /**
       * Navn - `String`
Nødvendig
       */
      name?: string;

      /**
       * Medaljenavn - `String`
Nødvendig
       */
      insignia?: string;

      /**
       * Slug - `Slug`
Nødvendig
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Bilde - `Image`
Nødvendig
       */
      image?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };

      /**
       * Beskrivelse - `Array`
Nødvendig
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;

      /**
       * Rekkefølge - `Number`
Nødvendig
       */
      order?: number;
    }

    /**
     * Historie
     */
    interface Event extends Sanity.Document {
      _type: "event";

      /**
       * Navn - `String`
Nødvendig
       */
      name?: string;

      /**
       * Forkortelse - `String`
       */
      short?: string;

      /**
       * År - `Date`
Nødvendig
       */
      year?: string;

      /**
       * Dato - `Date`
Hvis man vet nøyaktig dato
       */
      date?: string;

      /**
       * Stor hendelse - `Boolean`
       */
      major?: boolean;

      /**
       * Slug - `Slug`
Nødvendig
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Beskrivelse - `Array`
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;

      /**
       * Kilder - `Array`
Helst en eller flere
       */
      sources?: Array<Sanity.KeyedReference<Source>>;

      /**
       * Foreninger/organisasjoner - `Array`
       */
      associations?: Array<Sanity.KeyedReference<Association>>;
    }

    /**
     * Kilde
     */
    interface Source extends Sanity.Document {
      _type: "source";

      /**
       * Navn - `String`
Nødvendig
       */
      text?: string;

      /**
       * Lenke - `Url`
       */
      url?: string;
    }

    /**
     * Site Settings
     */
    interface SiteSettings extends Sanity.Document {
      _type: "siteSettings";

      /**
       * Sidens tittel - `String`
       */
      title?: string;

      /**
       * Beskrivelse av siden - `Text`
       */
      description?: string;

      /**
       * Hovedmeny - `Reference`
       */
      mainNav?: Sanity.Reference<Navigation>;

      /**
       * Undermeny - `Reference`
       */
      subNav?: Sanity.Reference<Navigation>;

      /**
       * Tekst i foten - `Array`
       */
      footer?: Array<Sanity.Keyed<Sanity.Block>>;
    }

    /**
     * Side
     */
    interface Page extends Sanity.Document {
      _type: "page";

      /**
       * Navn - `String`
Nødvendig
       */
      name?: string;

      /**
       * Tittel - `String`
       */
      title?: string;

      /**
       * Slug - `Slug`
Nødvendig
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Beskrivelse - `Text`
       */
      description?: string;

      /**
       * Innhold - `Array`
       */
      components?: Array<
        | Sanity.Keyed<TextComponent>
        | Sanity.Keyed<ButtonComponent>
        | Sanity.Keyed<ButtonsComponent>
        | Sanity.Keyed<DataComponent>
      >;
    }

    /**
     * Navigering
     */
    interface Navigation extends Sanity.Document {
      _type: "navigation";

      /**
       * Title - `String`
       */
      title?: string;

      /**
       * Navigation Id - `Slug`
       */
      navId?: {
        _type: "navId";
        current: string;
      };

      /**
       * Navigation items - `Array`
       */
      items?: Array<Sanity.Keyed<NavigationItem>>;
    }

    /**
     * Ordbok
     */
    interface DictionaryEntry extends Sanity.Document {
      _type: "dictionaryEntry";

      /**
       * Ord/uttrykk - `String`
Nødvendig
       */
      name?: string;

      /**
       * Nøkkel - `Slug`
Nødvendig
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Forklaring - `Array`
Nødvendig
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;
    }

    /**
     * Album
     */
    interface Album extends Sanity.Document {
      _type: "album";

      /**
       * Navn - `String`
Nødvendig
       */
      name?: string;

      /**
       * Slug - `Slug`
Nødvendig
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Dato - `Date`
       */
      date?: string;

      /**
       * Bilder - `Array`
       */
      images?: Array<Sanity.Keyed<AlbumImage>>;
    }

    type BlockContent = Array<
      | Sanity.Keyed<Sanity.Block>
      | Sanity.Keyed<{
          asset: Sanity.Asset;
          crop?: Sanity.ImageCrop;
          hotspot?: Sanity.ImageHotspot;
        }>
    >;

    type Award = {
      _type: "award";

      /**
       * Tittel - `Reference`
Nødvendig
       */
      title?: Sanity.Reference<Title>;

      /**
       * Dato - `Date`
Nødvendig
       */
      date?: string;

      /**
       * Rekkefølge (ift dato) - `Number`
For å rangere mottagere innad hver dato. Et tall mellom 0 og 100 (lavest rangeres først)
       */
      dateOrder?: number;

      /**
       * Fremhevet grunnlag - `Array`
Nødvendig
       */
      reason?: Array<Sanity.Keyed<Sanity.Block>>;

      /**
       * Grunnlag (resten) - `Array`
Nødvendig
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;
    };

    type ButtonComponent = {
      _type: "button-component";

      /**
       * Tekst - `String`
Nødvendig
       */
      text?: string;

      /**
       * Lenke - `RegistryReference`
       */
      link?: Link;

      /**
       * Type knapp - `String`
       */
      variant?: "primary";
    };

    type ButtonsComponent = {
      _type: "buttons-component";

      /**
       * Knapper - `Array`
       */
      buttons?: Array<Sanity.Keyed<ButtonComponent>>;
    };

    type DataComponent = {
      _type: "data-component";

      /**
       * Type - `String`
Data må lenkes opp mot siden via kode
       */
      type?:
        | "albums"
        | "associations"
        | "dictionaryEntries"
        | "events"
        | "lastMembers"
        | "members"
        | "pageUpdates";
    };

    type TextComponent = {
      _type: "text-component";

      /**
       * Tekst - `Array`
Nødvendig
       */
      text?: Array<Sanity.Keyed<Sanity.Block>>;

      /**
       * Type tekst - `String`
       */
      variant?: "large";
    };

    type Link = {
      _type: "link";

      /**
       * Internal Link - `Reference`
Select pages for navigation
       */
      internalLink?: Sanity.Reference<Page>;

      /**
       * External URL - `String`
       */
      externalUrl?: string;
    };

    type NavigationItem = {
      _type: "navigationItem";

      /**
       * Navigation Text - `String`
       */
      text?: string;

      /**
       * Navigation Item URL - `RegistryReference`
       */
      navigationItemUrl?: Link;
    };

    type AlbumImage = {
      _type: "albumImage";

      /**
       * image - `Image`
Nødvendig
       */
      image?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };

      /**
       * Description - `Array`
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;
    };

    type Document =
      | Person
      | Association
      | Title
      | Event
      | Source
      | SiteSettings
      | Page
      | Navigation
      | DictionaryEntry
      | Album;
  }
}
