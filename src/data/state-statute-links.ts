/** Official state statute codes and links to authoritative legal sources for window tint laws. */
export interface StatuteLink {
  /** Human-readable statute citation (e.g. "Ala. Code § 32-5-215") */
  statuteCode: string;
  /** URL to the official or authoritative legal text */
  statuteUrl: string;
}

export const STATE_STATUTE_LINKS: Record<string, StatuteLink> = {
  alabama: {
    statuteCode: "Ala. Code § 32-5-215",
    statuteUrl: "https://law.justia.com/codes/alabama/title-32/chapter-5/article-9/section-32-5-215/",
  },
  alaska: {
    statuteCode: "Alaska Stat. § 28.35.340",
    statuteUrl: "https://www.akleg.gov/basis/statutes.asp#28.35.340",
  },
  arizona: {
    statuteCode: "ARS § 28-959.01",
    statuteUrl: "https://www.azleg.gov/ars/28/00959-01.htm",
  },
  arkansas: {
    statuteCode: "Ark. Code § 27-37-306",
    statuteUrl: "https://law.justia.com/codes/arkansas/title-27/chapter-37/subchapter-3/section-27-37-306/",
  },
  california: {
    statuteCode: "Cal. Veh. Code § 26708",
    statuteUrl: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=26708.&lawCode=VEH",
  },
  colorado: {
    statuteCode: "CRS § 42-4-227",
    statuteUrl: "https://law.justia.com/codes/colorado/title-42/article-4/part-2/section-42-4-227/",
  },
  connecticut: {
    statuteCode: "Conn. Gen. Stat. § 14-99g",
    statuteUrl: "https://www.cga.ct.gov/current/pub/chap_246.htm#sec_14-99g",
  },
  delaware: {
    statuteCode: "Del. Code Title 21 § 4313",
    statuteUrl: "https://delcode.delaware.gov/title21/c043/sc01/index.html",
  },
  florida: {
    statuteCode: "Fla. Stat. § 316.2953",
    statuteUrl: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.2953.html",
  },
  georgia: {
    statuteCode: "O.C.G.A. § 40-8-73.1",
    statuteUrl: "https://law.justia.com/codes/georgia/title-40/chapter-8/article-1/part-3/section-40-8-73-1/",
  },
  hawaii: {
    statuteCode: "HRS § 291-21.3",
    statuteUrl: "https://www.capitol.hawaii.gov/hrscurrent/Vol05_Ch0261-0319/HRS0291/HRS-0291-0021_0003.htm",
  },
  idaho: {
    statuteCode: "Idaho Code § 49-944",
    statuteUrl: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH9/SECT49-944/",
  },
  illinois: {
    statuteCode: "625 ILCS 5/12-503",
    statuteUrl: "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=062500050K12-503",
  },
  indiana: {
    statuteCode: "IC § 9-19-19",
    statuteUrl: "https://law.justia.com/codes/indiana/title-9/article-19/chapter-19/",
  },
  iowa: {
    statuteCode: "Iowa Code § 321.438",
    statuteUrl: "https://www.legis.iowa.gov/law/iowaCode/sections?codeChapter=321&session=90",
  },
  kansas: {
    statuteCode: "K.S.A. § 8-1749a",
    statuteUrl: "https://www.ksrevisor.org/statutes/chapters/ch08/008_017_0049a.html",
  },
  kentucky: {
    statuteCode: "KRS § 189.110",
    statuteUrl: "https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=6422",
  },
  louisiana: {
    statuteCode: "La. R.S. § 32:361.1",
    statuteUrl: "https://law.justia.com/codes/louisiana/revised-statutes/title-32/rs-32-361-1/",
  },
  maine: {
    statuteCode: "29-A M.R.S. § 1916",
    statuteUrl: "https://legislature.maine.gov/statutes/29-A/title29-Asec1916.html",
  },
  maryland: {
    statuteCode: "Md. Transp. Code § 22-406",
    statuteUrl: "https://law.justia.com/codes/maryland/transportation/title-22/subtitle-4/section-22-406/",
  },
  massachusetts: {
    statuteCode: "MGL Ch. 90 § 9D",
    statuteUrl: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXIV/Chapter90/Section9D",
  },
  michigan: {
    statuteCode: "MCL § 257.709",
    statuteUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=MCL-257-709",
  },
  minnesota: {
    statuteCode: "Minn. Stat. § 169.71",
    statuteUrl: "https://www.revisor.mn.gov/statutes/cite/169.71",
  },
  mississippi: {
    statuteCode: "Miss. Code § 63-7-59",
    statuteUrl: "https://law.justia.com/codes/mississippi/title-63/chapter-7/article-1/section-63-7-59/",
  },
  missouri: {
    statuteCode: "Mo. Rev. Stat. § 307.173",
    statuteUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=307.173",
  },
  montana: {
    statuteCode: "MCA § 61-9-405",
    statuteUrl: "https://leg.mt.gov/bills/mca/title_0610/chapter_0090/part_0040/section_0050/0610-0090-0040-0050.html",
  },
  nebraska: {
    statuteCode: "Neb. Rev. Stat. § 60-6,257",
    statuteUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,257",
  },
  nevada: {
    statuteCode: "NRS § 484D.440",
    statuteUrl: "https://www.leg.state.nv.us/nrs/nrs-484d.html#NRS484DSec440",
  },
  "new-hampshire": {
    statuteCode: "NH RSA § 266:58-a",
    statuteUrl: "https://www.gencourt.state.nh.us/rsa/html/xxi/266/266-58-a.htm",
  },
  "new-jersey": {
    statuteCode: "N.J.S.A. § 39:3-74",
    statuteUrl: "https://law.justia.com/codes/new-jersey/title-39/section-39-3-74/",
  },
  "new-mexico": {
    statuteCode: "NMSA § 66-3-844",
    statuteUrl: "https://law.justia.com/codes/new-mexico/chapter-66/article-3/section-66-3-844/",
  },
  "new-york": {
    statuteCode: "NY VTL § 375(12-a)",
    statuteUrl: "https://www.nysenate.gov/legislation/laws/VAT/375",
  },
  "north-carolina": {
    statuteCode: "NCGS § 20-127",
    statuteUrl: "https://www.ncleg.gov/EnactedLegislation/Statutes/PDF/BySection/Chapter_20/GS_20-127.pdf",
  },
  "north-dakota": {
    statuteCode: "NDCC § 39-21-39",
    statuteUrl: "https://www.ndlegis.gov/cencode/t39c21.pdf",
  },
  ohio: {
    statuteCode: "ORC § 4513.241",
    statuteUrl: "https://codes.ohio.gov/ohio-revised-code/section-4513.241",
  },
  oklahoma: {
    statuteCode: "47 O.S. § 12-400.1",
    statuteUrl: "https://law.justia.com/codes/oklahoma/title-47/section-47-12-400-1/",
  },
  oregon: {
    statuteCode: "ORS § 815.221",
    statuteUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors815.html",
  },
  pennsylvania: {
    statuteCode: "75 Pa.C.S. § 4524",
    statuteUrl: "https://www.legis.state.pa.us/cfdocs/legis/LI/consCheck.cfm?txtType=HTM&ttl=75&div=0&chpt=45&sctn=24&subsctn=0",
  },
  "rhode-island": {
    statuteCode: "R.I. Gen. Laws § 31-23.1-1",
    statuteUrl: "https://law.justia.com/codes/rhode-island/title-31/chapter-31-23.1/section-31-23.1-1/",
  },
  "south-carolina": {
    statuteCode: "SC Code § 56-5-5015",
    statuteUrl: "https://www.scstatehouse.gov/code/t56c005.php",
  },
  "south-dakota": {
    statuteCode: "SDCL § 32-15-2.1",
    statuteUrl: "https://sdlegislature.gov/Statutes/32-15-2.1",
  },
  tennessee: {
    statuteCode: "Tenn. Code § 55-9-107",
    statuteUrl: "https://law.justia.com/codes/tennessee/title-55/chapter-9/part-1/section-55-9-107/",
  },
  texas: {
    statuteCode: "Tex. Transp. Code § 547.613",
    statuteUrl: "https://statutes.capitol.texas.gov/Docs/TN/htm/TN.547.htm#547.613",
  },
  utah: {
    statuteCode: "Utah Code § 41-6a-1635",
    statuteUrl: "https://le.utah.gov/xcode/Title41/Chapter6a/41-6a-S1635.html",
  },
  vermont: {
    statuteCode: "23 V.S.A. § 1125",
    statuteUrl: "https://legislature.vermont.gov/statutes/section/23/013/01125",
  },
  virginia: {
    statuteCode: "Va. Code § 46.2-1052",
    statuteUrl: "https://law.lis.virginia.gov/vacode/title46.2/chapter10/section46.2-1052/",
  },
  washington: {
    statuteCode: "RCW § 46.37.430",
    statuteUrl: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.37.430",
  },
  "west-virginia": {
    statuteCode: "W. Va. Code § 17C-15-5",
    statuteUrl: "https://www.wvlegislature.gov/wvcode/ChapterEntire.cfm?chap=17c&art=15&section=5",
  },
  wisconsin: {
    statuteCode: "Wis. Stat. § 347.40",
    statuteUrl: "https://docs.legis.wisconsin.gov/statutes/statutes/347/iii/40",
  },
  wyoming: {
    statuteCode: "Wyo. Stat. § 31-5-955",
    statuteUrl: "https://law.justia.com/codes/wyoming/title-31/chapter-5/article-9/section-31-5-955/",
  },
  "district-of-columbia": {
    statuteCode: "DC Code § 50-2207.01",
    statuteUrl: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2207.01",
  },
};
