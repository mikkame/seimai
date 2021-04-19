export type RawAbility = '' | '□' | '★' | '◇'
export type RawSkills = {
  'オープンデータ':RawAbility
  'ＥＢＰＭ':RawAbility
  'ＡＩ活用':RawAbility
  'シェアリングエコノミー':RawAbility
  '地域情報化計画・官民データ計画':RawAbility
  '人材の育成・活用':RawAbility
  '自治体システム／セキュリティ／地域情報プラットフォーム':RawAbility
  '自治体システムの標準化・共通化':RawAbility
  'ネットワークインフラ（Ｗｉ-Ｆｉ／ＬＰＷＡ／光ネットワーク）':RawAbility
  '５G':RawAbility
  'マイナンバー':RawAbility
  'マイキープラットフォーム':RawAbility
  '防災':RawAbility
  '教育情報化／情報教育':RawAbility
  'デジタルアーカイブ／図書館':RawAbility
  '働き方':RawAbility
  '子育て':RawAbility
  'テレワーク':RawAbility
  'ＲＰＡ導入':RawAbility
  '医療・介護・健康':RawAbility
  '農林水産業':RawAbility
  '地域ビジネス':RawAbility
  '観光':RawAbility
  '個人情報保護':RawAbility
  'スマートシティ':RawAbility
}
export type SkillsType = keyof RawSkills
export type RawRow = {
  [key in SkillsType]: RawAbility
} & {
  'No.': string
  'ふりがな': string
  '委嘱者': string
  '所属役職': string
  '__EMPTY_1': string
  '__EMPTY_2': string
  '委嘱者_1': string
  '__EMPTY_9': string
  '__EMPTY_10': string
} & RawSkills

export type DistAbility = {
  canAdvice:boolean,
  canLecture:boolean,
}

export type DistSkills = {
  'オープンデータ':DistAbility
  'ＥＢＰＭ':DistAbility
  'ＡＩ活用':DistAbility
  'シェアリングエコノミー':DistAbility
  '地域情報化計画・官民データ計画':DistAbility
  '人材の育成・活用':DistAbility
  '自治体システム／セキュリティ／地域情報プラットフォーム':DistAbility
  '自治体システムの標準化・共通化':DistAbility
  'ネットワークインフラ（Ｗｉ-Ｆｉ／ＬＰＷＡ／光ネットワーク）':DistAbility
  '５G':DistAbility
  'マイナンバー':DistAbility
  'マイキープラットフォーム':DistAbility
  '防災':DistAbility
  '教育情報化／情報教育':DistAbility
  'デジタルアーカイブ／図書館':DistAbility
  '働き方':DistAbility
  '子育て':DistAbility
  'テレワーク':DistAbility
  'ＲＰＡ導入':DistAbility
  '医療・介護・健康':DistAbility
  '農林水産業':DistAbility
  '地域ビジネス':DistAbility
  '観光':DistAbility
  '個人情報保護':DistAbility
  'スマートシティ':DistAbility
}

export type DistRow = {
  [key in SkillsType]: DistAbility
} & {
  'No.':number
  'ふりがな':string,
  '委嘱者':string
  '所属役職':Array<string>
  'コメント':string
  'pdf_url':string
  'web_url':string,
} & DistSkills

export const Skills: Array<SkillsType> = [
  'オープンデータ',
  'ＥＢＰＭ',
  'ＡＩ活用',
  'シェアリングエコノミー',
  '地域情報化計画・官民データ計画',
  '人材の育成・活用',
  '自治体システム／セキュリティ／地域情報プラットフォーム',
  '自治体システムの標準化・共通化',
  'ネットワークインフラ（Ｗｉ-Ｆｉ／ＬＰＷＡ／光ネットワーク）',
  '５G',
  'マイナンバー',
  'マイキープラットフォーム',
  '防災',
  '教育情報化／情報教育',
  'デジタルアーカイブ／図書館',
  '働き方',
  '子育て',
  'テレワーク',
  'ＲＰＡ導入',
  '医療・介護・健康',
  '農林水産業',
  '地域ビジネス',
  '観光',
  '個人情報保護',
];
