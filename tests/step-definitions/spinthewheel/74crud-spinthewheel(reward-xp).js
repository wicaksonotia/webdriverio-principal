import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spinthewheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import STWRewardXP from "../../pageobjects/spinthewheel/74crud-spinthewheel(reward-xp).page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 74. CRUD Spin the Wheel (Reward XP)");
allureReporter.addFeature("CRUD Spin the Wheel (Reward XP)");

//Scenario Outline: As a user, I can create Spin The Wheel reward xp
Given(/^I am on the Spin The Wheel page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SpinTheWheel();
});

When(/^I click button Buat$/, async () => {
  await spinthewheelPage.tombolBuat();
});

Then(
  /^System should be leading to form Buat Spin The Wheel page$/,
  async () => {
    await STWRewardXP.Page();
  }
);

Given(/^I am on the Buat Spin The Wheel page$/, async () => {
  await STWRewardXP.Page();
});

When(/^I input Nama Program (.*)$/, async (nama_program) => {
  await STWRewardXP.NamaProgramSTW(nama_program);
});

Then(/^System should be able to input Nama Program$/, async () => {
  await STWRewardXP.Page();
});

When(
  /^I search and select data in Nama Trade Program (.*)$/,
  async (nama_trade_program) => {
    await STWRewardXP.namaTradeProgram(nama_trade_program);
  }
);

Then(
  /^System should be able to search and select data in Nama Trade Program$/,
  async () => {
    await STWRewardXP.Page();
  }
);

When(/^I select date in Tanggal Mulai$/, async () => {
  await STWRewardXP.tanggalMulai();
});

Then(/^System should be able to select date in Tanggal Mulai$/, async () => {
  await STWRewardXP.Page();
});

When(/^I select time in Jam Terbit$/, async () => {
  await STWRewardXP.jamTerbit();
});

Then(/^System should be able to select time in Jam Terbit$/, async () => {
  // await STWRewardXP.Page()
});

When(/^I select date in Tanggal Berakhir$/, async () => {
  // await STWRewardXP.tanggalBerakhir()
});

Then(/^System should be able to select date in Tanggal Berakhir$/, async () => {
  await STWRewardXP.Page();
});

When(/^I select time in Jam Berakhir$/, async () => {
  await STWRewardXP.jamBerakhir();
});

Then(/^System should be able to select time in Jam Berakhir$/, async () => {
  await STWRewardXP.Page();
});

When(/^I click button Simpan in form tab Spin The Wheel$/, async () => {
  await STWRewardXP.simpanSTW();
});

Then(
  /^System should be able to submit data and leading to Spin The Wheel Page$/,
  async () => {
    await spinthewheelPage.page();
  }
);

When(/^I search in Spin The Wheel Page (.*)$/, async (nama_program) => {
  await spinthewheelPage.Search(nama_program);
});

Then(/^System should be able to search and find data$/, async () => {
  await spinthewheelPage.page();
});

When(/^I click button Edit in Spin The Wheel Page$/, async () => {
  await spinthewheelPage.Edit();
});

Then(
  /^System should be click button and leading to form Buat Spin The Wheel page$/,
  async () => {
    await STWRewardXP.Page();
  }
);

When(/^I click tab Audience$/, async () => {
  await STWRewardXP.tabAudience();
});

Then(
  /^System should be click tab Audience and leading to form tab Audience$/,
  async () => {
    await STWRewardXP.AudienceTabPage();
  }
);

When(/^I select Fixed Panel$/, async () => {
  await STWRewardXP.FixedPanel();
});

Then(/^System should be able to select Fixed Panel$/, async () => {
  await STWRewardXP.AudienceTabPage();
});

When(/^I click button Import XLSX and submit data$/, async () => {
  await STWRewardXP.ImportTamplate();
  await STWRewardXP.btnKirim();
});

Then(
  /^System should be click button Import XLSX and submit data$/,
  async () => {
    await STWRewardXP.AudienceTabPage();
  }
);

When(/^I click button Export Template$/, async () => {
  await STWRewardXP.ExportTamplate();
});

Then(/^System should be able to download Template$/, async () => {
  await STWRewardXP.AudienceTabPage();
});

When(/^I click button check$/, async () => {
  await STWRewardXP.btnCheck();
});

Then(/^System should be check data and update panel blast$/, async () => {
  await STWRewardXP.AudienceTabPage();
});

When(/^I click button Simpan$/, async () => {
  await STWRewardXP.btnSimpanAudience();
});

Then(/^System should be submit data in tab Audience$/, async () => {
  await STWRewardXP.AudienceTabPage();
});

When(/^I click tab pengaturan mekanisme$/, async () => {
  await STWRewardXP.tabPengaturanMekanisme();
});

Then(
  /^System should be leading to form tab pengaturan mekanisme$/,
  async () => {
    await STWRewardXP.PengaturanMekanismeTabPage();
  }
);

When(
  /^I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)$/,
  async (frekuensi_belanja) => {
    await STWRewardXP.frekuensiBelanja(frekuensi_belanja);
  }
);

Then(
  /^System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan$/,
  async () => {
    await STWRewardXP.PengaturanMekanismeTabPage();
  }
);

When(
  /^I input Maksimal Frekuensi Reward User per Minggu (.*)$/,
  async (maksimal_frekuensi) => {
    await STWRewardXP.maksimalFrekuensi(maksimal_frekuensi);
  }
);

Then(
  /^System should be input Maksimal Frekuensi Reward User per Minggu$/,
  async () => {
    await STWRewardXP.PengaturanMekanismeTabPage();
  }
);

When(/^I select radio button Pembatasan Produk dan Kategori$/, async () => {
  await STWRewardXP.pembatasanProdukdanKategori();
});

Then(
  /^System should be select radio button Pembatasan Produk and Kategori$/,
  async () => {
    await STWRewardXP.PengaturanMekanismeTabPage();
  }
);

When(/^I select radio button Batasi dengan Produk$/, async () => {
  await STWRewardXP.batasiDenganProduk();
});

Then(
  /^System should be select radio button Batasi dengan Produk$/,
  async () => {
    await STWRewardXP.PengaturanMekanismeTabPage();
  }
);

When(
  /^I search and select data in Batasan Berdasarkan Produk (.*)$/,
  async (batasan_berdasarkan_produk) => {
    await STWRewardXP.batasanBerdasarkanProduk(batasan_berdasarkan_produk);
  }
);

Then(
  /^System should be able to search and select data in Batasan Berdasarkan Produk$/,
  async () => {
    await STWRewardXP.PengaturanMekanismeTabPage();
  }
);

When(
  /^I input Nilai Transaksi Minimal (.*)$/,
  async (nilai_transaksi_minimal) => {
    await STWRewardXP.nilaiTransaksiMinimal(nilai_transaksi_minimal);
  }
);

Then(/^System should be input Nilai Transaksi Minimal$/, async () => {
  await STWRewardXP.PengaturanMekanismeTabPage();
});

When(
  /^I input minimum nilai transaksi (.*)$/,
  async (minimum_nilai_transaksi) => {
    await STWRewardXP.minimumNilaiTransaksi(minimum_nilai_transaksi);
  }
);

Then(/^System should be input minimum nilai transaksi$/, async () => {
  await STWRewardXP.PengaturanMekanismeTabPage();
});

When(/^I input Limit spin (.*)$/, async (limit_spin) => {
  await STWRewardXP.limitSpin(limit_spin);
});

Then(/^System should be input Limit Spin$/, async () => {
  await STWRewardXP.PengaturanMekanismeTabPage();
});

When(/^I click button Reward Non coin and delete$/, async () => {
  await STWRewardXP.btnRewardNonCoin();
  await STWRewardXP.Delete1();
});

Then(/^System should be show input form non coin and delete$/, async () => {
  await STWRewardXP.PengaturanMekanismeTabPage();
});

When(/^I click button Reward XP and delete$/, async () => {
  await STWRewardXP.RewardXP();
  await STWRewardXP.Delete1();
});

Then(/^System should be show input form Reward XP and delete$/, async () => {
  await STWRewardXP.PengaturanMekanismeTabPage();
});

When(/^I click button Reward XP$/, async () => {
  await STWRewardXP.RewardXP();
});

Then(/^System should be show input form Reward XP$/, async () => {
  await STWRewardXP.PengaturanMekanismeTabPage();
});

When(/^I input XP(.*)$/, async (xp) => {
  await STWRewardXP.inputXP(xp);
});

Then(/^System should be input XP$/, async () => {
  await STWRewardXP.PengaturanMekanismeTabPage();
});

When(/^I input slice (.*)$/, async (slice) => {
  await STWRewardXP.Slice(slice);
});

Then(/^System should be input slice$/, async () => {
  await STWRewardXP.PengaturanMekanismeTabPage();
});

When(/^I input probability (.*)$/, async (probability) => {
  await STWRewardXP.Probability(probability);
});

Then(/^System should be input probability$/, async () => {
  await STWRewardXP.PengaturanMekanismeTabPage();
});

Then(/^System should be input probability3$/, async () => {
  await STWRewardXP.PengaturanMekanismeTabPage();
});

When(/^I click button Simpan in form tab Pengaturan Mekanisme$/, async () => {
  await STWRewardXP.simpanTabPengaturanMekanisme();
});

Then(
  /^System should be able to submit data in form tab Pengaturan Mekanisme$/,
  async () => {
    await STWRewardXP.AudienceTabPage();
  }
);

When(/^I click tab Preview$/, async () => {
  await STWRewardXP.tabPreview();
});

Then(/^System should be leading to form tab Preview$/, async () => {
  await STWRewardXP.PreviewtabPage();
});

When(
  /^I insert Floating Icon and input Nama Program in form tab Preview (.*)$/,
  async (nama_program) => {
    await STWRewardXP.NamaProgramPreview(nama_program);
    await STWRewardXP.InsertGambar1();
  }
);

Then(
  /^System should be insert floating icon and input Nama Program in form tab Preview$/,
  async () => {
    await STWRewardXP.PreviewtabPage();
  }
);

When(/^I click button Simpan and Publish in form tab Preview$/, async () => {
  await STWRewardXP.simpanPreview();
  await STWRewardXP.publishTabPreview();
});

Then(
  /^System should be submit data and leading to Spin The Wheel Page$/,
  async () => {
    await spinthewheelPage.page();
  }
);

When(
  /^I search and click button Delete in Spin The Wheel Page (.*)$/,
  async (nama_program) => {
    await spinthewheelPage.Search(nama_program);
    await spinthewheelPage.Delete();
  }
);

Then(/^System should be able to find and Delete data$/, async () => {
  await spinthewheelPage.page();
});
