import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spinthewheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import stwBatasanProduk1AND from "../../pageobjects/spinthewheel/67crud-spinthewheel(batasan-produk-1-dengan-AND).page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 67. CRUD Spin the Wheel (Batasan > 1 Produk dengan AND)"
);
allureReporter.addFeature(
  "CRUD Spin the Wheel (Batasan > 1 Produk dengan AND)"
);

//Scenario Outline: As a user, I can create Spin The Wheel batasan produk 1 dengan AND
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
    await stwBatasanProduk1AND.Page();
  }
);

Given(/^I am on the Buat Spin The Wheel page$/, async () => {
  await stwBatasanProduk1AND.Page();
});

When(/^I input Nama Program (.*)$/, async (nama_program) => {
  await stwBatasanProduk1AND.NamaProgramSTW(nama_program);
});

Then(/^System should be able to input Nama Program$/, async () => {
  await stwBatasanProduk1AND.Page();
});

When(
  /^I search and select data in Nama Trade Program (.*)$/,
  async (nama_trade_program) => {
    await stwBatasanProduk1AND.namaTradeProgram(nama_trade_program);
  }
);

Then(
  /^System should be able to search and select data in Nama Trade Program$/,
  async () => {
    await stwBatasanProduk1AND.Page();
  }
);

When(/^I select date in Tanggal Mulai$/, async () => {
  await stwBatasanProduk1AND.tanggalMulai();
});

Then(/^System should be able to select date in Tanggal Mulai$/, async () => {
  await stwBatasanProduk1AND.Page();
});

When(/^I select time in Jam Terbit$/, async () => {
  await stwBatasanProduk1AND.jamTerbit();
});

Then(/^System should be able to select time in Jam Terbit$/, async () => {
  // await stwBatasanProduk1AND.Page()
});

When(/^I select date in Tanggal Berakhir$/, async () => {
  // await stwBatasanProduk1AND.tanggalBerakhir()
});

Then(/^System should be able to select date in Tanggal Berakhir$/, async () => {
  await stwBatasanProduk1AND.Page();
});

When(/^I select time in Jam Berakhir$/, async () => {
  await stwBatasanProduk1AND.jamBerakhir();
});

Then(/^System should be able to select time in Jam Berakhir$/, async () => {
  await stwBatasanProduk1AND.Page();
});

When(/^I click button Simpan in form tab Spin The Wheel$/, async () => {
  await stwBatasanProduk1AND.simpanSTW();
});

Then(
  /^System should be able to submit data and leading to Spin The Wheel Page$/,
  async () => {
    await stwBatasanProduk1AND.Page();
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
    await stwBatasanProduk1AND.Page();
  }
);

When(/^I click tab Audience$/, async () => {
  await stwBatasanProduk1AND.tabAudience();
});

Then(
  /^System should be click tab Audience and leading to form tab Audience$/,
  async () => {
    await stwBatasanProduk1AND.AudienceTabPage();
  }
);

When(/^I select Fixed Panel$/, async () => {
  await stwBatasanProduk1AND.FixedPanel();
});

Then(/^System should be able to select Fixed Panel$/, async () => {
  await stwBatasanProduk1AND.AudienceTabPage();
});

When(/^I click button Import XLSX and submit data$/, async () => {
  await stwBatasanProduk1AND.ImportTamplate();
  await stwBatasanProduk1AND.btnKirim();
});

Then(
  /^System should be click button Import XLSX and submit data$/,
  async () => {
    await stwBatasanProduk1AND.AudienceTabPage();
  }
);

When(/^I click button Export Template$/, async () => {
  await stwBatasanProduk1AND.ExportTamplate();
});

Then(/^System should be able to download Template$/, async () => {
  await stwBatasanProduk1AND.AudienceTabPage();
});

When(/^I click button check$/, async () => {
  await stwBatasanProduk1AND.btnCheck();
});

Then(/^System should be check data and update panel blast$/, async () => {
  await stwBatasanProduk1AND.AudienceTabPage();
});

When(/^I click button Simpan$/, async () => {
  await stwBatasanProduk1AND.btnSimpanAudience();
});

Then(/^System should be submit data in tab Audience$/, async () => {
  await stwBatasanProduk1AND.AudienceTabPage();
});

When(/^I click tab pengaturan mekanisme$/, async () => {
  await stwBatasanProduk1AND.tabPengaturanMekanisme();
});

Then(
  /^System should be leading to form tab pengaturan mekanisme$/,
  async () => {
    await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
  }
);

When(
  /^I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)$/,
  async (frekuensi_belanja) => {
    await stwBatasanProduk1AND.frekuensiBelanja(frekuensi_belanja);
  }
);

Then(
  /^System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan$/,
  async () => {
    await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
  }
);

When(
  /^I input Maksimal Frekuensi Reward User per Minggu (.*)$/,
  async (maksimal_frekuensi) => {
    await stwBatasanProduk1AND.maksimalFrekuensi(maksimal_frekuensi);
  }
);

Then(
  /^System should be input Maksimal Frekuensi Reward User per Minggu$/,
  async () => {
    await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
  }
);

When(/^I select radio button Pembatasan Produk dan Kategori$/, async () => {
  await stwBatasanProduk1AND.pembatasanProdukdanKategori();
});

Then(
  /^System should be select radio button Pembatasan Produk and Kategori$/,
  async () => {
    await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
  }
);

When(/^I select radio button Batasi dengan Produk$/, async () => {
  await stwBatasanProduk1AND.batasiDenganProduk();
});

Then(
  /^System should be select radio button Batasi dengan Produk$/,
  async () => {
    await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
  }
);

When(
  /^I search and select data in Batasan Berdasarkan Produk1 (.*)$/,
  async (batasan_berdasarkan_produk1) => {
    await stwBatasanProduk1AND.batasanBerdasarkanProduk1(
      batasan_berdasarkan_produk1
    );
  }
);

Then(
  /^System should be able to search and select data in Batasan Berdasarkan Produk1$/,
  async () => {
    await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
  }
);

When(
  /^I search and select data in Batasan Berdasarkan Produk2 (.*)$/,
  async (batasan_berdasarkan_produk2) => {
    await stwBatasanProduk1AND.batasanBerdasarkanProduk2(
      batasan_berdasarkan_produk2
    );
  }
);

Then(
  /^System should be able to search and select data in Batasan Berdasarkan Produk2$/,
  async () => {
    await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
  }
);

When(
  /^I input Nilai Transaksi Minimal1 (.*)$/,
  async (nilai_transaksi_minimal1) => {
    await stwBatasanProduk1AND.nilaiTransaksiMinimal1(nilai_transaksi_minimal1);
  }
);

Then(/^System should be input Nilai Transaksi Minimal1$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(
  /^I input Nilai Transaksi Minimal2 (.*)$/,
  async (nilai_transaksi_minimal2) => {
    await stwBatasanProduk1AND.nilaiTransaksiMinimal2(nilai_transaksi_minimal2);
  }
);

Then(/^System should be input Nilai Transaksi Minimal2$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(
  /^I input minimum nilai transaksi (.*)$/,
  async (minimum_nilai_transaksi) => {
    await stwBatasanProduk1AND.minimumNilaiTransaksi(minimum_nilai_transaksi);
  }
);

Then(/^System should be input minimum nilai transaksi$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I input Limit spin (.*)$/, async (limit_spin) => {
  await stwBatasanProduk1AND.limitSpin(limit_spin);
});

Then(/^System should be input Limit Spin$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I click button RewardXP1$/, async () => {
  await stwBatasanProduk1AND.RewardXP1();
});

Then(/^System should be show input form1$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I input xp1 (.*)$/, async (xp1) => {
  await stwBatasanProduk1AND.InputXP1(xp1);
});

Then(/^System should be input xp1$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I input slice1 (.*)$/, async (slice1) => {
  await stwBatasanProduk1AND.Slice1(slice1);
});

Then(/^System should be input slice1$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I input probability1 (.*)$/, async (probability1) => {
  await stwBatasanProduk1AND.Probability1(probability1);
});

Then(/^System should be input probability1$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I click button RewardXP2$/, async () => {
  await stwBatasanProduk1AND.RewardXP2();
});

Then(/^System should be show input form2$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I input xp2 (.*)$/, async (xp2) => {
  await stwBatasanProduk1AND.InputXP2(xp2);
});

Then(/^System should be input xp2$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I input slice2 (.*)$/, async (slice2) => {
  await stwBatasanProduk1AND.Slice2(slice2);
});

Then(/^System should be input slice2$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I input probability2 (.*)$/, async (probability2) => {
  await stwBatasanProduk1AND.Probability2(probability2);
});

Then(/^System should be input probability2$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I click button RewardXP3$/, async () => {
  await stwBatasanProduk1AND.RewardXP3();
});

Then(/^System should be show input form3$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I input xp3(.*)$/, async (xp3) => {
  await stwBatasanProduk1AND.InputXP3(xp3);
});

Then(/^System should be input xp3$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I input slice3 (.*)$/, async (slice3) => {
  await stwBatasanProduk1AND.Slice3(slice3);
});

Then(/^System should be input slice3$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I input probability3 (.*)$/, async (probability3) => {
  await stwBatasanProduk1AND.Probability3(probability3);
});

Then(/^System should be input probability3$/, async () => {
  await stwBatasanProduk1AND.PengaturanMekanismeTabPage();
});

When(/^I click button Simpan in form tab Pengaturan Mekanisme$/, async () => {
  await stwBatasanProduk1AND.simpanTabPengaturanMekanisme();
});

Then(
  /^System should be able to submit data in form tab Pengaturan Mekanisme$/,
  async () => {
    await stwBatasanProduk1AND.AudienceTabPage();
  }
);

When(/^I click tab Preview$/, async () => {
  await stwBatasanProduk1AND.tabPreview();
});

Then(/^System should be leading to form tab Preview$/, async () => {
  await stwBatasanProduk1AND.PreviewtabPage();
});

When(
  /^I insert Floating Icon and input Nama Program in form tab Preview (.*)$/,
  async (nama_program) => {
    await stwBatasanProduk1AND.NamaProgramPreview(nama_program);
    await stwBatasanProduk1AND.InsertGambar1();
  }
);

Then(
  /^System should be insert floating icon and input Nama Program in form tab Preview$/,
  async () => {
    await stwBatasanProduk1AND.PreviewtabPage();
  }
);

When(/^I click button Simpan and Publish in form tab Preview$/, async () => {
  await stwBatasanProduk1AND.simpanPreview();
  await stwBatasanProduk1AND.publishTabPreview();
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
