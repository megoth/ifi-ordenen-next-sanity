/// <reference types="@sanity-codegen/types" />

declare namespace Sanity {
  namespace Schema {
    /**
     * Post
     */
    interface Post extends Sanity.Document {
      _type: "post";

      /**
       * Title - `String`
       */
      title?: string;

      /**
       * Slug - `Slug`
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Author - `Reference`
       */
      author?: Sanity.Reference<Author>;

      /**
       * Main image - `Image`
       */
      mainImage?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };

      /**
       * Categories - `Array`
       */
      categories?: Array<Sanity.KeyedReference<Category>>;

      /**
       * Published at - `Datetime`
       */
      publishedAt?: string;

      /**
       * Body - `RegistryReference`
       */
      body?: BlockContent;
    }

    /**
     * Author
     */
    interface Author extends Sanity.Document {
      _type: "author";

      /**
       * Name - `String`
       */
      name?: string;

      /**
       * Slug - `Slug`
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Image - `Image`
       */
      image?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };

      /**
       * Bio - `Array`
       */
      bio?: Array<Sanity.Keyed<Sanity.Block>>;
    }

    /**
     * Category
     */
    interface Category extends Sanity.Document {
      _type: "category";

      /**
       * Title - `String`
       */
      title?: string;

      /**
       * Description - `Text`
       */
      description?: string;
    }

    /**
     * Comment
     */
    interface Comment extends Sanity.Document {
      _type: "comment";

      /**
       * Name - `String`
       */
      name?: string;

      /**
       * Approved - `Boolean`
Comments won't show on the site without approval
       */
      approved?: boolean;

      /**
       * Email - `String`
       */
      email?: string;

      /**
       * Comment - `Text`
       */
      comment?: string;

      /**
       * Post - `Reference`
       */
      post?: Sanity.Reference<Post>;
    }

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
     * Historisk hendelse
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
Nødvendig om det legges til beskrivelse
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
       * År - `Date`
Nødvendig
       */
      year?: string;

      /**
       * Rekkefølge (ift år) - `Number`
For å rangere mottagere innad hvert år. Et tall mellom 0 og 100
       */
      yearOrder?: number;

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
      class?: "primary";
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
      type?: "associations" | "events" | "lastMembers" | "members";
    };

    type TextComponent = {
      _type: "text-component";

      /**
       * Tekst - `Array`
Nødvendig
       */
      text?: Array<Sanity.Keyed<Sanity.Block>>;
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

    type Document =
      | Post
      | Author
      | Category
      | Comment
      | Person
      | Association
      | Title
      | Event
      | Source
      | SiteSettings
      | Page
      | Navigation;
  }
}
