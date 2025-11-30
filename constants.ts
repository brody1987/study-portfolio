import { AppContent } from './types';

export const INITIAL_CONTENT: AppContent = {
  hero: {
    title: "Heo gon",
    subtitle: "Brand Marketer & Product Strategist",
    tagline: "Crafting intuitive digital experiences that connect with people.",
    ctaText: "Explore My Work",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu9DSrPmG4vppu0NqCXWngvdUk8UafrFzFeEjBxDWfhsDsQGW1yuADt-DXW8e4FWzcOneKsoeKCyy-BpwnfCDFT23Pp5ArBx32S0rkrG2vwxF6qNMNlgcmLUvr_nAsfCoQsGJhXYqNa06R3lI6dA3mnthlvlfryW4Nk2Ohr0nrqASg3yii6WQAHA7IO58QFHoFzI1RXp7k1AXEgooDEbPlUT4FAoN3ms53SUskvEyYMhCy_0IRsii52cci8ipW4lIk83IOozxy7LM"
  },
  featured: {
    title: "Featured Work",
    description: "Transforming complex problems into intuitive and beautiful user interfaces.",
    projects: [
      {
        id: "1",
        title: "Fintech Mobile App",
        category: "Mobile App / UX/UI",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqS9jwQr41JCKfBpfncWHbSxXpJZXm0n5IvJxH0uGU-_7pqg2-j3WKD0F9ywr7Y0KuRP6oZJ35KLBzLMLqrkvvmT487-1vQZ7NeQh7M6IELOYk8BVbvxOpOWR6DH4LsJ603zRYkRhKEVP4lotbskNAyEHcQSZLPkvgqNayM0xfuLNCNQ55nM_E1J0HkbSXVhV6rdUJiYys-dh6oAf6izQ2CEN2yYNMWhzQMAyqANJMOk4J6ELAQi4Wnc_5ChFAAbg_5Sb_hMHmZAA"
      },
      {
        id: "2",
        title: "Web App Dashboard",
        category: "Web App / Prototyping",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMKQkj7T6AEpr1CXfaD_MrVU1eghboNp8ZGemuYPKfYjoWTjOgcuq1gYoLY3Gzygk7Ng3IlVo3DdN59t0-JrQbFfmILQhWMEsHGTA9XD9NWshxVR2zjdA6lu-1yTJ8MKbWi6h0HvaOE0A5XHuTKxuXz0R_sJ7GEy8PVCFr3GTO4I5Pp1Qobvc2QwCrFjK5ULXtbZJTbOKdq9KwBNtD3AsmSpQkHepPzLbECcMLGqgMUk_dKwik5ESV-j0JfbPJ0pLtanyjXHNfros"
      },
      {
        id: "3",
        title: "Creative Branding",
        category: "Branding / Visual Design",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLBHohvzAZToaFjxSJmReVCr7udc10cWxRZkGD56gjJpG9Qvd60fih0x1XMEsshIR_UEdU2l11b3KeQRMdKtre9RYyZASnEJvknIR_5unRi2D6q5k_F7Ay8DPE5Gukmt-9ahBTNyVSwo58AQ1YsqGUzIrtbP3tSbbVSzOLfxeVvt-PJBj7B2MzC4HxXSnug80jy_L2Te29wKx8x-zniSzxE5jUT0vq0DX_UebpXMJ0GsCLglLWFYOF3VOfTquWGqm3G1jJyKcNLLI"
      }
    ]
  },
  about: {
    title: "About Me",
    bio: "A passionate UX/UI designer dedicated to crafting intuitive and beautiful digital products. My design philosophy is rooted in empathy, focusing on creating solutions that are not only user-friendly but also delightful to interact with.",
    profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsVPOIrtqNYTWz-qwpIsWJgDiyCNqSJdrdM-6vSG7occR62uOQXDtO1nn68eTXDTpGxySnMiCoOxolxGfrNjzzSmn1ex-JILoWc3Zep9qiZyWtZ3iJluhtjnc3D2Ab2IN7VVzt-IBqMUN-hrtGhQqUsxolnv9jkzfV5MqrKwwkP64mK9wgvByvhjlFn7kuxSPNiIgdvrYdBh6fj6eXil8XY8I2UyCxG304zrxGa0kNvUrztPc2b5vq-DRVd4l5Qqc9GIVPTN-skyY",
    skills: [
      { name: "UX Research", percentage: 95 },
      { name: "UI Design", percentage: 98 },
      { name: "Prototyping", percentage: 90 }
    ],
    tools: [
      { name: "Figma", iconUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFzkCz-M7J2FXeJV-yhohu6eMJ3giRiuGXYVkRKXHPeSkjLg1xKvtH0-4jQ4XxQe2TI0Smv4A3nyidK34XXGSx8pmJ8PzpCYM1SgF356nMXH5-Gpd3Cg177719kmUIQg1roJX6s2LQ1cp2XfJ0mOKM9EJmTZ5BM-kT7O2HsidHMKcld_ZaoBtdgsQ6Ud__RtmkYpncYzxY1H9QXm0sNpnwPIsHQwdid9MV3wKY4dJwIlqIr6uRu1ZnStHLtwK6_0TjcLiDnEne2Ig" },
      { name: "Adobe XD", iconUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXoiz5DrQ64Zlqlgssbx-5_ve4C7WAfXxT-xO-vXUTTGdNdcv22iORB0qwJTVQUQz-Q0lMd_eCD6Wxv8XNGiauwcxQyIBTPsl6zeEGz7xo4zVVXYUMqZdZDtBuvmIHGPFv6SgTGB_dvMSiA4iU0imjf-PKi4F4HhSRvIGR46uhLmQ8hzEazn6XZiI8cXvHEn7xpIwNAhl4kNmggTCNxgUaREZL7sb6dm4lxqdZwZk2nzAH4b8WXVtNEgEQMbZrCua1OQWP4EnTZh8" },
      { name: "Webflow", iconUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXmmWNJ9f-5RnlQAjcjezytoenPQiOwkb8jXeGcKmswG3HcVoovRSEWMfKJFRCoWxetYn8wXV7hpKQQXFzoP9xyuVWSYfbc1iwbIPZnoHMbJj6jB-T4Ez55mqSOfUxaKyr-rcagsQGdr4XGo5isjdp1epiLraD41nUIcTWB4eQIQiwh9AP-bzcyMdfKOyFbmla0OSQ4AwqU-7Gw_6FB3mOif5KFVwLSEPvM4fPY6mk8uU-nILBUf2urkzGMHsqorhnlL83Kul515c" },
      { name: "Illustrator", iconUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUgOiQibFG3-KJw6Xaj9K8h3jCPNyb3P-OQSsMBibLlh5LY16woGogq9shJzFWsPftS5e1-rOx9sIlKWvjakmplULF5cyYwqcn5ynZmT_E44XPzcJNlD8CWiG8EfKfDqtp87y5QVsQDhTTzK_kOjzMTu7OaUSUjAU4_k8ZmMANQZuywpQ0uDMJ8s72NA3YjlVqD3-uQ3FIZUEB0jNgE8QKcvRPYbO6i4diRWC-i85O3PpTrHlFmPvN8Y1dnbKceBWkK65C5rdcghQ" }
    ]
  },
  allWork: {
    title: "All Projects",
    subtitle: "A collection of my favorite projects. Take a look around!",
    projects: [
      {
        id: "1",
        title: "E-commerce Redesign",
        category: "UI/UX Design",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsLhPZrY-H1rE793Qcmn5DlrEzCUSP3l8PCkWFJRcSP_CuBrq4WPADd-Xd_x3SKAIHiQRSS0FXN7vVc6FCQ9YxLzo7jQvAjKKuSKSIwELWS_yeTFBHD38s6GDVbGhLuHohwTPyuKEt2rHfpGf0fpn-DqmekZ5J5baAY4gKiBT4CfxXlydeUUmvc2h9h2H2lcPGNes08jS1Eev4_0KklqHzFiwJfZu4cAwZu8-qnQfnbBUxP2H--lQmLn43ARHAmKnH_RXNoCzT4vs"
      },
      {
        id: "2",
        title: "Mobile Banking",
        category: "App Concept",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKWMm_JUML6x3zW0VMON8tJdHZjxkOEdhwV8QJC5TfY3R-ZtmXedu8TZF8QLzbCIePU1kOQc_nwQmgO68ncokUEuAnvH2vODqjYZMi2utNQyWbixTU7zB9C1RFZsgCAhQAF0M4thGIWLwCDJeUQMZVsmHwHyu1wrzt6N6Xfy2ZqJ9nLHLbDBcpiMd5d3BmqcdNJp_RyuZkggV6LcMcNNR903pb-iGYwwXoyhWMYUXQ5VSlZSurqkgGy7wiNEot0cReseSHpfUzufw"
      },
      {
        id: "3",
        title: "SaaS Dashboard",
        category: "Web App",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARWqnXoMIeaFBUngcglowd1Um3TYJtT6MVFoOA-3owWW0PUgAjWjlo07Jeoq1Q1ADwPDFkIoU5JAc1r9H-BhQkrtBSdy90m1In34nZ8-riD7FD7MCe1aj2l4imWDfDaWNAOTpnZNzmSK9mWLhE0M3v3Ji1I6t_NF_2i4PCGHoqXo1lKhEQjzkd5j5AkH-Wywm1u18T2qyAeOMjkQhat8nG7Cxdbt2vXwUFu0GfBJfU43_NMjIWtQ5uVkTBkRnSNCEQB2eYbLCNnCc"
      },
      {
        id: "4",
        title: "Travel Booking",
        category: "Web App",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd-rOLaQKyBCr0MrMb1soC5NMFch1TVkCh93IkmPZJbofxFXYxsxH39asDNpUulr-4YRIAcVj7qLeo0yZnLUkhc96b1mQd3MFGlO7aUbPIzZHrRSMjQHpXLiR6h4TC4ATjhNV5ZCT4opbghL4z-G6BW-Kjpu69gdLzpKk2WsAHSyGrkXwe2x7lWqWQyaUL-pUGVCTGGh-2j6Cczd-VTFal2kBD03cEogWM5RBs6M-inkcfCyZutQxbGlbNqlRYQknQJglaGbIiwjU"
      },
      {
        id: "5",
        title: "Patient Portal",
        category: "Healthcare",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRtXwUFGbBznZJp324DklxoBrxiOSYcyxKLZClkPXsr6VMvIrA1UMoj6LvJbzZOqqWAHuts5J6GzJ9BXN3uWQ8_UeF_pj29gBGja1Ccbz1WGmcY01gphGVP_B4bdMNlC-A3N8vMl3rsmk8IzOl6wGx71HNYC4Kso7q3UHYo970LdmcYTq6YTjtcTI5n_HhjGpTcAF6Hkj4eG9JoHGILnh5qaQlFNZYA9JZw0ZnpPiuC4PUkQxX7BqyAHVOHWFkUNq_B5GpcPN-vSk"
      },
      {
        id: "6",
        title: "Food Delivery",
        category: "Branding",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlYdQF7cVU2RIYLrFZpE0LmPSwWl1MhhoEXBQiL1AA2MXLRleGeZD_VoppI09NEx3LNXllkJNxmq3shUdih37hL-9Ru0rQf-0JdeTHKen10rV8ae5mdfxk_KgB6KTyhWSkh_tR72KEHeVa6hEaBU1gQ54YBTVMjfaPB4fmBCEnhdGmbyX7HOWg84enRvN2bNvJ_e0ZNMnQMUv2Q4UBE6sOP1M_HpHrF2lEHPBEgD61s0c8TRnePbNWvaXvgs5NSVZInxkx7nlbZiY"
      }
    ]
  },
  contact: {
    title: "Let's Connect",
    subtitle: "Have a project in mind or just want to say hello? I'd love to hear from you.",
    email: "olivia.chen@design.com"
  }
};