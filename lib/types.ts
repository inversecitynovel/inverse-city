export interface Chapter {
  title: string
  file: string
}

export interface Volume {
  title: string
  intro: string
  chapters: Chapter[]
}

export interface NovelList {
  volumes: Volume[]
}

export interface ChapterContent {
  title: string
  content: string
}
