const data = {
  formList: [
    {
      id: "1",
      title: "CPPT",
      info: null,
      notification: "(Notifications)",
      classExtension: "cppt",
      content: "handlerComponent()"
    },
    {
      id: "2",
      title: "Assessment Awal",
      info: "Perawat",
      notification: "",
      classExtension: "perawat",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2"
    },
    {
      id: "3",
      title: "Assessment Awal",
      info: "Dokter",
      notification: "",
      classExtension: "dokter",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3"
    },
    {
      id: "4",
      title: "Pengkajian Tambahan 01",
      info: null,
      notification: "",
      classExtension: "tambahan",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4"
    }
  ],

  cpptContent: [
    {
      id: "1",
      name: "Steinarr Flomran",
      workTitle: "Licensed Clinical Social Worker",
      postingDate: "2019-10-22T13:55:17+0700",
      SOAP: {
        S: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        O: "Faceres tu quidem, Torquate, haec omnia.",
        A:
          "Tu autem, si tibi illa probabantur, cur non propriis verbis ea tenebas? Ita multa dicunt, quae vix intellegam. At ego quem huic anteponam non audeo dicere; Ita graviter et severe voluptatem secrevit a bono.",
        P:
          "Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia."
      },
      verified: "No"
    },
    {
      id: "2",
      name: "dr. Jody Cunningham Sp.KP",
      workTitle: "Spesialis Kedokteran Penerbangan",
      postingDate: "2019-08-13T08:47:51+0700",
      SOAP: {
        S: "Tum Torquatus: Prorsus, inquit, assentior.",
        O: "Eadem nunc mea adversum te oratio est.",
        A:
          "Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Duo Reges: constructio interrete.",
        P:
          "Et hunc idem dico, inquieta sed ad virtutes et ad vitia nihil interesse. Primum cur ista res digna odio est, nisi quod est turpis."
      },
      verified: "No"
    },
    {
      id: "3",
      name: "drg. A. Bachtiar, Sp.BM",
      workTitle: "Spesialis Gigi dan Bedah Mulut",
      postingDate: "2019-08-12T08:47:51+0700",
      SOAP: {
        S:
          "Videamus animi partes, quarum est conspectus illustrior; At enim hic etiam dolore.",
        O:
          "Erit enim mecum, si tecum erit. Ego vero volo in virtute vim esse quam maximam.",
        A:
          "Itaque hic ipse iam pridem est reiectus; Inde sermone vario sex illa a Dipylo stadia confecimus. ",
        P:
          "Qui enim voluptatem ipsam contemnunt, iis licet dicere se acupenserem maenae non anteponere. Stulti autem malorum memoria torquentur, sapientes bona praeterita grata recordatione renovata delectant."
      },
      verified: "Yes"
    },
    {
      id: "4",
      name: "dr. Harper Johnston Sp.THT-KT",
      workTitle: "Spesialis Telinga Hidung Tenggorok-Bedah Kepala Leher",
      postingDate: "2019-08-12T08:47:51+0700",
      SOAP: {
        S:
          "Quid, si reviviscant Platonis illi et deinceps qui eorum auditores fuerunt, et tecum ita loquantur.",
        O:
          "Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere.",
        A: "eatus sibi videtur esse moriens.",
        P: "Cato, dicere aliquid vis aut nos iam longiores sumus."
      },
      verified: "No"
    }
  ]
};

export default {
  getFormList() {
    return data.formList;
  },
  getCPPTContent() {
    return data.cpptContent;
  }
};
