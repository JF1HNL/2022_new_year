const omikujiOnlyData = [
  {
    omikuji : "FKBFCDFHDFK%FG0FGBFK%FDEFCD",
    text : "FK9FC7FCGFK9FC8FC7FK9FC7FGBFK9FC7FGCFK9FC7FCAFKLFHIFC7FK0FHHFCGFK%FHDFH0FK9FC7FGLFKBFH%FHAFK%FG%FHJFKCFGGFHLFK9FC7FGGFK0FHCFCEFK%FHDFH0FK9FC7FGHFK9FC7FGGFK9FC8FCGFK9FC7FDJFK9FC7FCAFKLFHIFC7",
    rate : 2
  },
  {
    omikuji : "FK%FG0FGBFK%FDEFCD",
    text : "FK0FHHFCGFK%FHDFH0FK9FC7FGLFK9FC7FGCFK9FC7FGAFK9FC8FC8FK9FC7FC0FK9FC7FC0FK0FHCFCEFK%FHDFH0FK9FC7FGHFK9FC7FGGFK9FC8FCGFK9FC7FDJFK9FC7FCAFKLFHIFC7",
    rate : 8
  },
  {
    omikuji : "FK0FHCFGJFK%FDEFCD",
    text : "FK0FHHFCGFK%FHDFH0FK9FC7FGLFK9FC7FC0FK9FC7FC0FK0FHCFCEFK%FHDFH0FK9FC7FGHFK9FC7FGGFK9FC8FCGFK9FC7FDJFK9FC7FCAFKLFHIFC7",
    rate : 10
  },
  {
    omikuji : "FK%FHEFCLFK%FDEFCD",
    text : "FK0FHHFCGFK%FHDFH0FK9FC7FGLFKAFG%FHJFK9FC7FDBFK9FC7FC0FK0FHCFCEFK%FHDFH0FK9FC7FGHFK9FC7FGGFK9FC8FCGFK9FC7FDJFK9FC7FCAFK9FC7FGBFK9FC7FDD",
    rate : 10
  },
  {
    omikuji : "FK%FDEFCD",
    text : "FK0FHHFCGFK%FHDFH0FK9FC7FGLFKBFGDFCLFK9FC8FC0FK9FC7FCHFK9FC7FGGFK0FHCFCEFK%FHDFH0FK9FC7FGHFK9FC7FGGFK9FC8FCGFK9FC7FDJFK9FC7FCAFK9FC7FGBFK9FC7FDD",
    rate : 10
  },
  {
    omikuji : "FK%FHEFD7FK9FCEFC%FK%FDEFCD",
    text : "FK9FC7FCGFKAFDAFDDFKBFDEFCAFK9FC7FGHFKBFGAFCLFK9FC7FC8FK9FC8FCGFKLFHIFDL",
    rate : 10
  },
  {
    omikuji : "FK9FC9FDBFK9FC9FC7FK%FDEFCD",
    text : "FK%FHEFCLFK9FC7FD%FK9FC7FGGFK9FC7FGCFK9FC7FD9FK9FC8FCJFK9FC7FGHFKBFGAFCLFK9FC7FC8FK9FC8FCG",
    rate : 20
  },
  {
    omikuji : "FKAFDIFGHFK%FDEFCD",
    text : "FK9FC9FDKFK9FC8FG0FK9FC9FDGFK9FC9FHIFK9FC8FHDFK9FC7FGBFK9FC7FC0FK9FC7FCJFK9FC7FHKFK9FC7FDBFK9FC8FCBFK9FC7FCA",
    rate : 10
  },
  {
    omikuji : "FK%FCBFHA",
    text : "FK9FC7FGKFK9FC8FD9FK9FC7FH9FK9FC8FCGFK9FC8FCAFK9FC7FG9FK9FC7FCLFK9FC8FCGFK9FC7FC0FK9FC7FCJFK9FC7FHKFK9FC7FDBFK9FC8FCBFK9FC7FCA",
    rate : 20
  }
]

const omikujiData = {
  omikuji : null,
  negai : ['FK%FCLFHAFK9FC7FCA', 'FK%FG0FDGFK%FCCFCAFK%FCLFHAFK9FC7FCA', 'FK9FC8FCLFK9FC7FCHFK9FC8FCDFK9FC7FGGFK9FC7FC0', 'FK9FC7FCJFK9FC7FG9FK9FC7FGCFK%FCLFHAFK9FC7FCA', 'FK9FC7FCIFK9FC8FD9FK9FC7FHEFK9FC8FCI', 'FK9FC7FC0FK9FC7FDGFK9FC8FCIFK%FCLFHAFK9FC7FCA'],
  kinun : ['FKBFH%FHAFK%FG%FHJFKCFGGFHL', 'FK9FC8FCCFK9FC7FC0', 'FK9FC7FDLFK9FC7FHAFK9FC8FD9FK9FC8FCCFK9FC7FC0', 'FK9FC7FHKFK9FC7FC7FK9FC7FHKFK9FC7FC7FK9FC8FCCFK9FC7FC0', 'FK9FC7FCAFK9FC9FHIFK9FC8FD9', 'FK9FC7FCIFK9FC8FD9FK9FC7FHEFK9FC8FCI', 'FK%FG0FDGFK%FCCFCAFK9FC8FCCFK9FC7FC0'],
  syobu : ['FK%FCHFDJFK9FC7FG0', 'FK%FCHFDJFK9FC7FGAFK9FC8FCH', 'FK9FC7FDLFK9FC7FHAFK9FC8FD9FK%FCHFDJFK9FC7FGAFK9FC8FCH', 'FK9FC7FGDFK9FC7FG7FK9FC8FCDFK9FC7FGCFK9FC8FC8FK9FC7FC0FK9FC7FCCFK9FC7FGGFK9FC7FC0', 'FK%FCHFDJFK9FC7FGAFK9FC7FGGFK9FC7FC0', 'FK9FC7FCAFK9FC9FHIFK9FC8FD9'],
  lucky : ['FK9FC7FCAFK9FC7FGDFK9FC8FD9FK%FHIFC7FK%FHJFD9', 'FK9FC7FHAFK9FC7FG9FK9FC7FCHFK9FC7FD7FK9FC7FCAFK9FC7FGDFK9FC8FD9', 'FK9FC9FDKFK9FC8FHDFK9FC8FGL', 'FK9FC7FCGFKCFH8FG7FK%FHCFC9', 'FK9FC9FCDFK9FC9FHIFK9FC9FCGFK9FC9FC0', 'FK9FC9FDIFK9FC9FHIFK9FC9FGHFK9FC9FDGFK9FC9FH9']
}