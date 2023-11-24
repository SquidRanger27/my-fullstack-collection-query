// New character forms must have at least one of the name fields filled in
// May also have an image
interface NewCharacterBase {
  image: string | null // Optional URL
}

// Option where name is set, but alias may not be
interface NewCharacterSetName extends NewCharacterBase {
  name: string | null
  alias: string
}

// Option where alias is set, but name may not be
interface NewCharacterSetAlias extends NewCharacterBase {
  name: string
  alias: string | null
}

// New character forms must then match either of the two formats
export type NewCharacterModel = NewCharacterSetName | NewCharacterSetAlias

// Character data will be the same, but with an added id
export type CharacterModel = NewCharacterModel & {
  id: number
}
