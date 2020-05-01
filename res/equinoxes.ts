/* eslint-disable line-comment-position, max-len */
const equinoxes = [
    '2015-03-20T22:45:05Z', // Times until 2200 use the JPL DE405 Ephemeris
    '2016-03-20T04:30:41Z',
    '2017-03-20T10:28:24Z',
    '2018-03-20T16:16:00Z',
    '2019-03-20T21:57:43Z',
    '2020-03-20T03:49:36Z',
    '2021-03-20T09:37:06Z',
    '2022-03-20T15:33:17Z',
    '2023-03-20T21:24:52Z',
    '2024-03-20T03:05:56Z',
    '2025-03-20T09:02:02Z',
    '2026-03-20T15:45:31Z', // Added 1 hour to force 2026 Naw-Rúz to agree with UHJ list, otherwise sunset is calculated to be 21 seconds after the equinox
    '2027-03-20T20:24:43Z',
    '2028-03-20T02:17:08Z',
    '2029-03-20T08:01:23Z',
    '2030-03-20T13:52:27Z',
    '2031-03-20T19:40:08Z',
    '2032-03-20T01:22:12Z',
    '2033-03-20T07:22:27Z',
    '2034-03-20T13:17:30Z',
    '2035-03-20T19:02:45Z',
    '2036-03-20T01:01:59Z',
    '2037-03-20T06:50:11Z',
    '2038-03-20T12:39:52Z',
    '2039-03-20T18:32:10Z',
    '2040-03-20T00:11:35Z',
    '2041-03-20T06:06:44Z',
    '2042-03-20T11:53:32Z',
    '2043-03-20T17:26:51Z',
    '2044-03-19T23:20:38Z',
    '2045-03-20T05:06:44Z',
    '2046-03-20T10:57:53Z',
    '2047-03-20T16:52:23Z',
    '2048-03-19T22:33:18Z',
    '2049-03-20T04:28:52Z',
    '2050-03-20T10:18:49Z',
    '2051-03-20T15:59:27Z',
    '2052-03-19T21:55:33Z',
    '2053-03-20T03:47:01Z',
    '2054-03-20T09:34:22Z',
    '2055-03-20T15:27:46Z',
    '2056-03-19T21:11:22Z',
    '2057-03-20T03:07:26Z',
    '2058-03-20T09:05:23Z',
    '2059-03-20T14:43:45Z', // Close, but only to within 2 minutes, so should be safe
    '2060-03-19T20:37:55Z',
    '2061-03-20T02:25:53Z',
    '2062-03-20T08:06:33Z',
    '2063-03-20T13:59:22Z',
    '2064-03-19T19:38:02Z',
    '2065-03-20T01:28:20Z',
    '2066-03-20T07:19:32Z',
    '2067-03-20T12:52:58Z',
    '2068-03-19T18:48:59Z',
    '2069-03-20T00:44:05Z',
    '2070-03-20T06:35:13Z',
    '2071-03-20T12:33:51Z',
    '2072-03-19T18:20:46Z',
    '2073-03-20T00:13:14Z',
    '2074-03-20T06:08:13Z',
    '2075-03-20T11:46:45Z',
    '2076-03-19T17:37:59Z',
    '2077-03-19T23:30:54Z',
    '2078-03-20T05:09:58Z',
    '2079-03-20T10:59:59Z',
    '2080-03-19T16:44:00Z',
    '2081-03-19T22:33:42Z',
    '2082-03-20T04:31:03Z',
    '2083-03-20T10:09:43Z',
    '2084-03-19T15:59:17Z',
    '2085-03-19T21:52:51Z',
    '2086-03-20T03:34:47Z',
    '2087-03-20T09:28:23Z',
    '2088-03-19T15:16:24Z',
    '2089-03-19T21:07:05Z',
    '2090-03-20T03:01:12Z',
    '2091-03-20T08:41:39Z',
    '2092-03-19T14:33:19Z',
    '2093-03-19T20:33:47Z',
    '2094-03-20T02:21:43Z',
    '2095-03-20T08:13:54Z',
    '2096-03-19T14:02:54Z',
    '2097-03-19T19:47:51Z',
    '2098-03-20T01:40:21Z',
    '2099-03-20T07:17:46Z',
    '2100-03-20T13:03:02Z',
    '2101-03-20T18:56:37Z',
    '2102-03-21T00:34:57Z',
    '2103-03-21T06:22:51Z',
    '2104-03-20T12:13:43Z',
    '2105-03-20T18:06:19Z',
    '2106-03-21T00:04:19Z',
    '2107-03-21T05:49:10Z',
    '2108-03-20T11:38:59Z',
    '2109-03-20T17:34:57Z',
    '2110-03-20T23:21:24Z',
    '2111-03-21T05:10:13Z',
    '2112-03-20T11:02:14Z',
    '2113-03-20T16:51:02Z',
    '2114-03-20T22:38:03Z',
    '2115-03-21T04:22:19Z',
    '2116-03-20T10:07:55Z',
    '2117-03-20T16:05:46Z',
    '2118-03-20T21:52:36Z',
    '2119-03-21T03:37:37Z',
    '2120-03-20T09:28:21Z',
    '2121-03-20T15:14:34Z',
    '2122-03-20T21:03:35Z',
    '2123-03-21T02:48:05Z',
    '2124-03-20T08:34:47Z',
    '2125-03-20T14:28:52Z',
    '2126-03-20T20:14:01Z',
    '2127-03-21T02:02:13Z',
    '2128-03-20T07:57:10Z',
    '2129-03-20T13:54:39Z',
    '2130-03-20T19:48:21Z',
    '2131-03-21T01:35:45Z',
    '2132-03-20T07:23:46Z',
    '2133-03-20T13:13:56Z',
    '2134-03-20T19:00:59Z',
    '2135-03-21T00:43:34Z',
    '2136-03-20T06:32:16Z',
    '2137-03-20T12:20:38Z',
    '2138-03-20T18:02:23Z',
    '2139-03-20T23:47:34Z',
    '2140-03-20T05:36:08Z',
    '2141-03-20T11:31:24Z',
    '2142-03-20T17:22:52Z',
    '2143-03-20T23:09:39Z',
    '2144-03-20T05:00:32Z',
    '2145-03-20T10:55:32Z',
    '2146-03-20T16:43:04Z',
    '2147-03-20T22:31:24Z',
    '2148-03-20T04:23:00Z',
    '2149-03-20T10:11:50Z',
    '2150-03-20T16:00:09Z',
    '2151-03-20T21:46:24Z',
    '2152-03-20T03:36:29Z',
    '2153-03-20T09:35:36Z',
    '2154-03-20T15:20:33Z',
    '2155-03-20T21:04:45Z',
    '2156-03-20T02:52:35Z',
    '2157-03-20T08:37:44Z',
    '2158-03-20T14:25:24Z',
    '2159-03-20T20:09:55Z',
    '2160-03-20T01:56:47Z',
    '2161-03-20T07:50:09Z',
    '2162-03-20T13:36:08Z',
    '2163-03-20T19:22:11Z',
    '2164-03-20T01:20:23Z',
    '2165-03-20T07:15:26Z',
    '2166-03-20T13:07:38Z',
    '2167-03-20T18:58:59Z',
    '2168-03-20T00:44:48Z',
    '2169-03-20T06:42:04Z',
    '2170-03-20T12:27:17Z',
    '2171-03-20T18:07:40Z',
    '2172-03-20T00:00:28Z',
    '2173-03-20T05:41:57Z',
    '2174-03-20T11:26:20Z',
    '2175-03-20T17:14:19Z',
    '2176-03-19T23:00:22Z',
    '2177-03-20T05:02:04Z',
    '2178-03-20T10:48:00Z',
    '2179-03-20T16:30:48Z',
    '2180-03-19T22:25:33Z',
    '2181-03-20T04:14:02Z',
    '2182-03-20T10:01:53Z',
    '2183-03-20T15:54:51Z',
    '2184-03-19T21:41:31Z',
    '2185-03-20T03:37:19Z',
    '2186-03-20T09:26:07Z',
    '2187-03-20T15:07:35Z',
    '2188-03-19T21:08:00Z',
    '2189-03-20T02:59:07Z',
    '2190-03-20T08:42:04Z',
    '2191-03-20T14:33:35Z',
    '2192-03-19T20:13:49Z',
    '2193-03-20T02:06:47Z',
    '2194-03-20T07:54:29Z',
    '2195-03-20T13:30:46Z',
    '2196-03-19T19:25:56Z',
    '2197-03-20T01:11:10Z',
    '2198-03-20T06:53:15Z',
    '2199-03-20T12:49:30Z',
    '2200-03-20T18:40:26Z',
    '2201-03-21T00:40:47Z', // Times from here calculated using the VSOP87 which is slightly less accurate but only on the order of few seconds
    '2202-03-21T06:35:01Z',
    '2203-03-21T12:15:51Z',
    '2204-03-20T18:12:36Z',
    '2205-03-21T00:03:48Z',
    '2206-03-21T05:43:44Z',
    '2207-03-21T11:37:58Z',
    '2208-03-20T17:20:13Z',
    '2209-03-20T23:09:38Z',
    '2210-03-21T04:59:31Z',
    '2211-03-21T10:37:06Z',
    '2212-03-20T16:36:03Z',
    '2213-03-20T22:28:29Z',
    '2214-03-21T04:06:58Z',
    '2215-03-21T10:00:49Z',
    '2216-03-20T15:45:34Z',
    '2217-03-20T21:37:20Z',
    '2218-03-21T03:30:44Z',
    '2219-03-21T09:11:13Z',
    '2220-03-20T15:05:49Z',
    '2221-03-20T20:58:47Z',
    '2222-03-21T02:38:46Z',
    '2223-03-21T08:36:10Z',
    '2224-03-20T14:30:56Z',
    '2225-03-20T20:21:38Z',
    '2226-03-21T02:17:04Z',
    '2227-03-21T07:54:23Z',
    '2228-03-20T13:44:49Z',
    '2229-03-20T19:38:01Z',
    '2230-03-21T01:11:55Z',
    '2231-03-21T07:03:54Z',
    '2232-03-20T12:49:11Z',
    '2233-03-20T18:33:28Z',
    '2234-03-21T00:27:08Z',
    '2235-03-21T06:09:42Z',
    '2236-03-20T12:07:41Z',
    '2237-03-20T18:06:11Z',
    '2238-03-20T23:46:40Z',
    '2239-03-21T05:40:15Z',
    '2240-03-20T11:32:22Z',
    '2241-03-20T17:22:33Z',
    '2242-03-20T23:15:47Z',
    '2243-03-21T04:59:09Z',
    '2244-03-20T10:46:52Z',
    '2245-03-20T16:40:51Z',
    '2246-03-20T22:17:52Z',
    '2247-03-21T04:09:43Z',
    '2248-03-20T10:05:56Z',
    '2249-03-20T15:51:02Z',
    '2250-03-20T21:42:02Z',
    '2251-03-21T03:22:32Z',
    '2252-03-20T09:09:46Z',
    '2253-03-20T15:05:23Z',
    '2254-03-20T20:43:24Z',
    '2255-03-21T02:33:30Z',
    '2256-03-20T08:27:38Z',
    '2257-03-20T14:14:09Z',
    '2258-03-20T20:08:29Z',
    '2259-03-21T02:00:01Z',
    '2260-03-20T07:55:23Z',
    '2261-03-20T13:53:22Z',
    '2262-03-20T19:34:41Z',
    '2263-03-21T01:20:53Z',
    '2264-03-20T07:15:07Z',
    '2265-03-20T12:59:14Z',
    '2266-03-20T18:45:53Z',
    '2267-03-21T00:30:13Z',
    '2268-03-20T06:13:21Z',
    '2269-03-20T12:04:35Z',
    '2270-03-20T17:44:48Z',
    '2271-03-20T23:35:30Z',
    '2272-03-20T05:34:16Z',
    '2273-03-20T11:24:19Z',
    '2274-03-20T17:13:57Z',
    '2275-03-20T23:03:02Z',
    '2276-03-20T04:54:37Z',
    '2277-03-20T10:48:37Z',
    '2278-03-20T16:33:28Z',
    '2279-03-20T22:20:17Z',
    '2280-03-20T04:13:10Z',
    '2281-03-20T10:01:14Z',
    '2282-03-20T15:47:28Z',
    '2283-03-20T21:40:45Z',
    '2284-03-20T03:31:29Z',
    '2285-03-20T09:21:03Z',
    '2286-03-20T15:03:00Z',
    '2287-03-20T20:44:32Z',
    '2288-03-20T02:38:29Z',
    '2289-03-20T08:25:06Z',
    '2290-03-20T14:10:30Z',
    '2291-03-20T19:59:27Z',
    '2292-03-20T01:48:37Z',
    '2293-03-20T07:39:44Z',
    '2294-03-20T13:28:05Z',
    '2295-03-20T19:22:13Z',
    '2296-03-20T01:19:55Z',
    '2297-03-20T07:13:22Z',
    '2298-03-20T12:59:03Z',
    '2299-03-20T18:47:32Z',
    '2300-03-21T00:40:14Z',
    '2301-03-21T06:25:30Z',
    '2302-03-21T12:09:46Z',
    '2303-03-21T17:53:30Z',
    '2304-03-20T23:39:04Z',
    '2305-03-21T05:29:17Z',
    '2306-03-21T11:13:08Z',
    '2307-03-21T17:05:58Z',
    '2308-03-20T23:01:32Z',
    '2309-03-21T04:48:45Z',
    '2310-03-21T10:34:25Z',
    '2311-03-21T16:22:44Z',
    '2312-03-20T22:14:25Z',
    '2313-03-21T04:07:31Z',
    '2314-03-21T09:54:36Z',
    '2315-03-21T15:41:57Z',
    '2316-03-20T21:37:05Z',
    '2317-03-21T03:23:49Z',
    '2318-03-21T09:11:55Z',
    '2319-03-21T15:06:01Z',
    '2320-03-20T20:56:14Z',
    '2321-03-21T02:47:42Z',
    '2322-03-21T08:30:01Z',
    '2323-03-21T14:13:24Z',
    '2324-03-20T20:08:18Z',
    '2325-03-21T01:50:53Z',
    '2326-03-21T07:33:57Z',
    '2327-03-21T13:22:08Z',
    '2328-03-20T19:08:06Z',
    '2329-03-21T01:00:42Z',
    '2330-03-21T06:51:56Z',
    '2331-03-21T12:43:38Z',
    '2332-03-20T18:45:18Z',
    '2333-03-21T00:33:59Z',
    '2334-03-21T06:16:48Z',
    '2335-03-21T12:12:24Z',
    '2336-03-20T17:58:55Z',
    '2337-03-20T23:49:45Z',
    '2338-03-21T05:36:54Z',
    '2339-03-21T11:16:11Z',
    '2340-03-20T17:11:59Z',
    '2341-03-20T22:55:44Z',
    '2342-03-21T04:38:39Z',
    '2343-03-21T10:36:01Z',
    '2344-03-20T16:21:59Z',
    '2345-03-20T22:11:17Z',
    '2346-03-21T03:58:30Z',
    '2347-03-21T09:41:59Z',
    '2348-03-20T15:40:18Z',
    '2349-03-20T21:28:30Z',
    '2350-03-21T03:10:22Z',
    '2351-03-21T09:04:39Z', // Stopping here as next Naw-Rúz potentially to close to call given the uncertainty in delta T
    '2352-03-20T14:54:29Z',
    '2353-03-20T20:44:15Z',
    '2354-03-21T02:41:39Z',
    '2355-03-21T08:29:11Z',
    '2356-03-20T14:27:29Z',
    '2357-03-20T20:15:24Z',
    '2358-03-21T01:50:17Z',
    '2359-03-21T07:45:05Z',
    '2360-03-20T13:29:36Z',
    '2361-03-20T19:12:54Z',
    '2362-03-21T01:03:04Z',
    '2363-03-21T06:41:00Z',
    '2364-03-20T12:36:02Z',
    '2365-03-20T18:26:10Z',
    '2366-03-21T00:08:34Z',
    '2367-03-21T06:10:50Z',
    '2368-03-20T12:02:20Z',
    '2369-03-20T17:48:58Z',
    '2370-03-20T23:43:44Z',
    '2371-03-21T05:29:42Z',
    '2372-03-20T11:25:11Z',
    '2373-03-20T17:17:37Z',
    '2374-03-20T22:53:27Z',
    '2375-03-21T04:45:54Z',
    '2376-03-20T10:34:31Z',
    '2377-03-20T16:16:02Z',
    '2378-03-20T22:13:36Z',
    '2379-03-21T03:58:42Z',
    '2380-03-20T09:50:42Z',
    '2381-03-20T15:40:47Z',
    '2382-03-20T21:15:54Z',
    '2383-03-21T03:09:21Z',
    '2384-03-20T09:00:54Z',
    '2385-03-20T14:42:56Z',
    '2386-03-20T20:37:04Z',
    '2387-03-21T02:23:15Z',
    '2388-03-20T08:16:52Z',
    '2389-03-20T14:14:41Z',
    '2390-03-20T19:59:40Z',
    '2391-03-21T01:56:23Z',
    '2392-03-20T07:51:45Z',
    '2393-03-20T13:30:17Z',
    '2394-03-20T19:22:15Z',
    '2395-03-21T01:08:02Z',
    '2396-03-20T06:54:39Z',
    '2397-03-20T12:46:57Z',
    '2398-03-20T18:19:51Z',
    '2399-03-21T00:08:50Z',
    '2400-03-20T06:01:18Z'];

export { equinoxes };