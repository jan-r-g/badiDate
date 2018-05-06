# badiDate - Documentation

## Dependencies

badiDate requires [Moment.js](http://momentjs.com/). In order to use the `localBadiDate()` wrapper function,
[Moment Timezone](http://momentjs.com/timezone/) and [MeeusSunMoon](https://github.com/janrg/MeeusSunMoon) (v2.0.0+) are also
required. Versions that bundle MeeusSunMoon are included.

## Installation

### Bundles

A variety of different bundles are provided depending on the exact requirements:

`badiDate*.js` files include the `BadiDate` class and the function `badiDateOptions`.  
`localBadiDate*.js` files include all of the above as well as the `LocalBadiDate` class.

Files with `-mss` in the name have the MeeusSunMoon module bundled in. For usage of `LocalBadiDate` without a bundled
version of MeeusSunMoon see below.

Files with `-locales` in the name include all currently available locales, files without only include the english locale.
Creating bundles with a custom set of bundled locales is also possible (see `rollup.config.js`)

Files with `-es` in the name are ES6 modules, files without are packed as UMD modules downcompiled to be compatible with
the vast majority of browser versions currently in use.

### Script Include

Compiled versions (both minified and not) are located in `dist/`. Since ES6 module support of currently used browsers
is still limited, the versions not ending in `-es` are recommended for most use cases.

Include for example as:

```html
<script src="{yourjspath}/localBadiDate-mss-locales.min.js"></script>
```

If a non-`-mss` file is used, MeeusSunMoon needs to be included separately.

The other dependencies are best included from a CDN, such as CDNJS:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.0/moment-with-locales.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.14/moment-timezone-with-data.min.js"></script>
```

### NPM

`npm install badidate`

For bundling (e.g. with rollup) you can then import the ES6 module via

```js
import {BadiDate, LocalBadiDate, badiDateOptions, MeeusSunMoon} from 'badidate';
```

or directly use it in the browser via

```js
import {BadiDate, LocalBadiDate, badiDateOptions, MeeusSunMoon} from 'node_modules/badidate/dist/localBadiDate-mss-locales-es.js';
```

where MeeusSunMoon is imported in order to be able to set the modules options via `MeeusSunMoon.options()` (see
[MeeusSunMoon](https://github.com/janrg/MeeusSunMoon)).

If the version of `localBadiDate*.js` without bundled  MeeusSunMoon is used, the module has to be loaded globally via its UMD bundle in order
for it to be available inside of the LocalBadiDate class.

## Configuration

There are two configuration options that can be set as

```js
badiDateOptions({
  useClockLocations: false, // default: true
  defaultLanguage: 'en', // default: 'en'
});
```

(Note that two of the options for MeeusSunMoon, `roundToNearestMinute` and `returnTimeForPNMS`, default to `true` when using the badiDate module.)

`useClockLocations` will use the appropriate times for regions in which fixed times are used rather than the actual times for sunrise, sunset etc.. Setting it to `false` will disable this behaviour. For a list of currently implemented regions, see below. This option is only available if the `LocalBadiDate` class is used.

`defaultLanguage` sets the default language for output of Badí' dates. (Alternatively this can be overwritten on each call to `format()`, see below.) For a list of available languages see `src/locale/`.

## The BadiDate Class

The BadiDate object represents a Badí' date with some simplifications in order to make it independent of location
(for local Badí' dates, a wrapper class, `LocalBadiDate()` exists, see below), namely

*   Badí' dates are taken to correspond to Gregorian dates 1-1, i.e. to start at midnight
*   No other times (e.g. for Holy Day commemorations) are stored

For dates in 172 BE and after (21 March 2015 and after), the new implementation is used to calculate the beginning
of the year, all Holy Days, and the length of Ayyám-i-Há, for earlier dates the earlier implementation, where for the
Twin Birthdays, the earlier implementation as customary in countries predominantly using the Gregorian calendar (i.e.
5 'Ilm and 9 Qudrat) is used.

### Creating a badiDate Object

There are a number of different ways, in which a badiDate object can be created:

#### From a moment or Date object

```js
const myMoment = moment('2015-03-21');
const myBadiDate1 = new BadiDate(myMoment);

const myDate = new Date('2015-03-21');
const myBadiDate2 = new BadiDate(myDate);
```

Sets the Badí' date from the Gregorian date given by the moment or Date object. Any time or timezone information
is ignored.

#### From an ISO 8601 string

```js
const myBadiDate = new BadiDate('2015-03-21');
```

Sets the Badí' date from the Gregorian date given by the string. Handling of malformed strings is attempted by
passing them through the JS Date object, but can lead to unpredictable results. Any time or timezone information
is ignored.

#### From a Badí' date string or array

```js
const myBadiDate1 = new BadiDate('172-1-1');
const myBadiDate2 = new BadiDate('172-1');
const myBadiDate3 = new BadiDate([172, 1, 1]);
const myBadiDate4 = new BadiDate([172, 1]);
```

Sets the Badí' date from the given string or array. Arguments can either be in the format `'Y-M-D'`,
`[Y, M, D]` or `'Y-HD'`, `[Y, HD]` where Y, M, D, and HD are integers and stand for
Badí' year, Badí' month, Badí' day, and Holy Day respectively. Badí' year can range from 1 to currently 507, Badí
month from 1 to 20 (20 is used to represent Ayyám-i-Há throughout this module), Badí' day from 1 to 19 (except if
the month is 20 in which case it is from 1 to 5, a value of 5 in a year with 365 days bubbles up to 1 'Alá' automatically),
and Holy Day from 1 to 11 (corresponding to Naw-Rúz, First Day of Riḍván, Ninth Day of Riḍván, Twelfth Day of Riḍván,
Declaration of the Báb, Ascension of Bahá'u'lláh, Martyrdom of the Báb, Birth of the Báb, Birth of Bahá'u'lláh, Day of
the Covenant, Ascension of 'Abdu'l-Bahá).

## The LocalBadiDate Class

## Local Badí' Dates

`LocalBadiDate()` creates a wrapper object for a `BadiDate` that is valid for a specific location.
This object contains the BadiDate object, as well as moment objects for the start and end of the Badí' date as well as
sunrise, solar noon, and - if applicable - the time for commemoration of the Holy Day.

It requires the modules [Moment Timezone](http://momentjs.com/timezone/) and [MeeusSunMoon](https://github.com/janrg/MeeusSunMoon),
the latter of which is included in some of the bundles.

A local Badí' date object is created with

```js
const date1 = new LocalBadiDate(date, latitude, longitude, timezoneId);
```

where `date` accepts the same input formats as `BadiDate()`, `latitude` and `longitude` are the geographic latitude and longitude
(-90 to 90, -180 to 180, north and east are positive) and `timezoneId` is an IANA timezone string, e.g. `"Europe/London"`.

All input formats for `date` **except for a moment object** are treated the same as in the `BadiDate()`
constructor. For a moment object, the time of day is taken into consideration and if appropriate, the Badí' day shifted forward
by a day. If this is not desired, make sure to assign an early time that will definitely not be after sunset, to the moment
object before invoking `LocalBadiDate()`.

The properties of the object created by `localBadiDate()` can be retrieved via

```js
LocalBadiDate.badiDate
LocalBadiDate.start
LocalBadiDate.end
LocalBadiDate.sunrise
LocalBadiDate.solarNoon
LocalBadiDate.holyDayCommemoration
```

where `LocalBadiDate.badiDate` is a `BadiDate` object and all other properties are `moment-timezone` objects except for
`LocalBadiDate.holyDayCommemoration` which can also be `false`.

## Localization

The output of Badí' dates fully supports localization and a number of different localizations are provided (this will increase
in the future). Data is stored in `src/locale/`.

### Language Fallbacks

Date formatting is subject to a series of language fallbacks if a given component is not available in the selected language.
The maximum possible fallback sequence is

```
IETF language tag (regional variant) -> IETF language tag (primary language) -> configured default language -> English
```

Hence if e.g. French was set as the default language and a BadiDate was formatted using the language tag 'pt-br' (Portuguese
(Brazil)), for each date component in the output, the formatter will attempt to use the Brazilian Portuguese entry; if this
is not available, the Portuguese entry; if this is not avaible the French entry; and if this is not available the English entry.

### Contributing a Locale

Follow these steps if you wish to add a locale to the module:
1. Copy the file `src/locale/en.js` to `src/locale/languagecode.js` where `languagecode` is the IETF language code of the
language you wish to contribute.
2. Replace all the strings that differ from the English version, **delete all that do not**, these will be taken care of
by the fallback. Don't forget to also remove entries that no longer exist above from the export statement.
3. Add the appropriate lines for your language to `src/badiLocale.js`. Note that for regional variants, the variable names
need to use an underscore instead of a hyphen.
4. Add the appropriate entr(y/ies) to `localeRegex` in `rollup.config.js`. Note that for regional variants, entries with
both hyphen and underscore are required.

### Bundles With Custom Locale Sets

`rollup.config.js` is set up to allow bundling custom sets of languages if desired. For this, simply pass an array of
locale strings to `rollupConfig()` and set the filename with the optional `filename` parameter. Note that for regional
variants, entries with both hyphen and underscore are required.

## Getters

The following getters exist (note that badiDate objects are immutable, so there are no setters):

```js
BadiDate.isValid()
```

`true` if the Badí' date is valid, `false` if not (e.g. if the date was out of the range which can be handled or if a
malformed string was used to create it).

```js
BadiDate.badiDay()
```

The day of the Badí' month, 1-19

```js
BadiDate.badiMonth()
```

The Badí' month, 1-20, 20 stands for Ayyám-i-Há

```js
BadiDate.badiYear()
```

The Badí' Year

```js
BadiDate.badiWeekday()
```

The Badí' Weekday, 1-7, corresponding to Jalál (Saturday) to Istiqlál (Friday)

```js
BadiDate.yearInVahid()
```

Number of the Badí' Year in the Váḥid, 1-19

```js
BadiDate.vahid()
```

Number of the Váḥid in the Kull-i-Shay’

```js
BadiDate.kullIShay()
```

Number of the Kull-i-Shay', starts at 1

```js
BadiDate.ayyamiHaLength()
```

Length of Ayyám-i-Há in the Badí' year the date is in, 4/5

```js
BadiDate.gregorianDate()
```

Corresponding Gregorian date as a moment object

```js
BadiDate.holyDayNumber()
```

Number corresponding to a Holy Day (see above), 1-11 or false

```js
BadiDate.holyDay(language)
```

The name of the Holy Day in the language given, or false.

```js
BadiDate.format(formatString, language)
```

Outputs the date in the format as given by formatString and in the given language. The following tokens are replaced in `formatString`:

|                   | Token | Output
|-------------------|-------|--------
| **Day**           | d     | Day of the month, without leading zeroes
|                   | dd    | Day of the month, with leading zeroes
|                   | D     | Day of the month as 3-letter (+ apostrophes) abbreviation of transliteration
|                   | DD    | Full day of month transliteration
|                   | DDL   | Full day of month translation
|                   | DD+   | Full day of month transliteration followed by translation in brackets
| **Month**         | m     | Badí' month, without leading zeroes, Ayyám-i-Há is 20
|                   | mm    | Badí' month, with leading zeroes, Ayyám-i-Há is 20
|                   | M     | Badí' month as 3-letter (+ apostrophes) abbreviation of transliteration
|                   | MM    | Badí' month transliteration
|                   | MML   | Badí' month translation
|                   | MM+   | Badí' month transliteration followed by translation in brackets
| **Year**          | y     | Badí' year without leading zeros
|                   | yy    | 3 digit Badí' year with leading zeroes
| **Weekday**       | ww    | Badí' weekday, 2 letter abbreviation of transliteration
|                   | W     | Badí' weekday, 3 letter abbreviation of transliteration
|                   | WW    | Badí' weekday, transliteration
|                   | WWL   | Badí' weekday, translation
| **Year in Váḥid** | yv    | Year in Váḥid, without leading zeroes
|                   | yyv   | Year in Váḥid, with leading zeroes
|                   | YV    | Year in Váḥid, transliteration
| **Váḥid**         | v     | Váḥid without leading zeroes
|                   | vv    | Váḥid with leading zeroes
| **Kull-i-Shay’**  | k     | Kull-i-Shay’ without leading zeroes
|                   | kk    | Kull-i-Shay’ with leading zeroes
| **BE**            | BE    | localized version of BE to indicate a Badí' year

If no formatting string is given, `format()` defaults to `'d MM+ y BE'`. E.g.

```js
const myBadiDate = new BadiDate([172, 1, 1]);
console.log(myBadiDate.format());
```

will print

```
1 Bahá (Splendour) 172 BE
```

(assuming that the default language is English)

Any text in the formatting string wrapped in `{}` will not be parsed and output as-is.
A `{` without matching `}` will result in a return value of `"Invalid formatting string."`.

## Locations for Which Fixed Times are Used

The following locations use fixed times rather than actual sunrise, sunset, etc. for purposes of the Badí' calendar. The module determines
the appropriate region by checking whether the given coordinates lie within polygons that are included in the code. Slight inaccuracies
near borders are possible since the polygons had to be simplified for performance and size reasons. Over water, boundaries are drawn very
roughly to reduce vertex count and no attempt was made to capture to boundary to international waters.

The groups of three times given below correspond to sunrise, solar noon, and sunset.

*   **Canada**: 06:30, 12:00, 18:00 above 60°N latitude.
*   **Finland**: 06:00, 12:00, 18:00 local standard time (i.e. 07:00, 13:00, 19:00 in local time when DST is in effect), **except** for the
month of \`Alá´, where the actual times for sunrise, solar noon, and sunset are used.
*   **Iceland**: 06:00, 13:00, 18:00.
*   **Norway**: 06:00, 12:00, 18:00.
*   **Sweden**: 06:00, 12:00, 18:00 in Norrland (i.e. Lapland, Norrbotten, Västerbotten, Jämtland, Ångermanland, Medelpad, Härjedalen,
Hälsingland, and Gästriksland)
*   **USA**: 06:00, 12:00, 18:00 local standard time (i.e. 07:00, 13:00, 19:00 in local time when DST is in effect) **in Alaska**.

## The Source Data

The list of equinox times used can be found in `res/equinoxes.js`. The BadiDate class itself contains data for every year from 172 to
the end of the range, specifically the date of Naw-Rúz, the length of Ayyám-i-Há, and the dates of the Twin Birthdays.
The data can be generated in two formats on `res/generateYears.html`, long and short format (Note that since this uses ES6 modules, it
has to be done on a webserver. The short format is the one used by default in the BadiDate class. Every year is represented by a 4
character string in base36 encoding where the first character indicates the day in March on which the end of Naw-Rúz falls, the second
character the length of Ayyám-i-Há, and the third and fourth character the Badí' month and day respectively on which the Birth of the
Báb falls. This data is then internally unpacked into the long format as needed, though it is also possible to replace the short format
data in badiDate.js with the long format without any additional changes (though this appears to make the handling of the object slightly
slower (and of course increases the file size significantly.
An item in the long format looks as follows:

```js
172: {
  aHL: 4,
  NR: '2015-03-21',
  TB: [13, 10, 13, 11]
},
```

## Tests

Extensive tests exist and can be found in `test/`. They can also be run in the console via `npm run node-test`.
