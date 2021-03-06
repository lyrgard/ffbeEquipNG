export const itemWorldConstants = {
  ITEM_ENHANCEMENT_TYPES : {
    rare: ['rare_3', 'rare_4'],
    hp: ['hp_15', 'hp_12', 'hp_10', 'hp_7', 'hp_5', 'hp_3', 'hp_1'],
    mp: ['mp_15', 'mp_12', 'mp_10', 'mp_7', 'mp_5', 'mp_3', 'mp_1'],
    atk: ['atk_15', 'atk_12', 'atk_10', 'atk_7', 'atk_5', 'atk_3', 'atk_1'],
    def: ['def_15', 'def_12', 'def_10', 'def_7', 'def_5', 'def_3', 'def_1'],
    mag: ['mag_15', 'mag_12', 'mag_10', 'mag_7', 'mag_5', 'mag_3', 'mag_1'],
    spr: ['spr_15', 'spr_12', 'spr_10', 'spr_7', 'spr_5', 'spr_3', 'spr_1'],
    autoRegen: ["autoRegen_4","autoRegen_3","autoRegen_2","autoRegen_1"],
    autoRefresh: ["autoRefresh_2","autoRefresh_1"],
    autoProtect: ["autoProtect_5", "autoProtect_4","autoProtect_3","autoProtect_2","autoProtect_1"],
    autoShell: ["autoShell_5", "autoShell_4","autoShell_3","autoShell_2","autoShell_1"],
  },
  ITEM_ENHANCEMENT_LABELS : {
    "rare_3":{
      "dagger": "+100% LB fill rate",
      "sword": "HP/ATK + 15%",
      "greatSword": "HP/ATK + 15%",
      "katana": "HP/ATK + 15%",
      "staff": "SPR/MP + 15%",
      "rod": "MAG/MP +15%",
      "bow": "ATK/MAG +30%",
      "axe": "ATK +30%",
      "hammer": "HP/DEF +15%",
      "spear": "HP/ATK +15%",
      "harp": "HP/SPR +15%",
      "whip": "MP +30%",
      "throwing": "HP/MP +15%",
      "gun": "ATK +30%",
      "mace": "HP +30%",
      "fist": "HP/ATK +15%"
    },
    "rare_4":{
      "dagger": "+150% LB fill rate",
      "sword": "HP/ATK + 20%",
      "greatSword": "HP/ATK + 20%",
      "katana": "HP/ATK + 20%",
      "staff": "SPR/MP + 20%",
      "rod": "MAG/MP +20%",
      "bow": "ATK/MAG +35%",
      "axe": "ATK +40%",
      "hammer": "HP/DEF +20%",
      "spear": "HP/ATK +20%",
      "harp": "HP/SPR +20%",
      "whip": "MP +40%",
      "throwing": "HP/MP +20%",
      "gun": "ATK +40%",
      "mace": "HP +40%",
      "fist": "HP/ATK +20%",
    },
    "hp_15": "HP +15%", "hp_12": "HP +12%", "hp_10": "HP +10%", "hp_7": "HP +7%", "hp_5": "HP +5%", "hp_3": "HP +3%", "hp_1": "HP +1%",
    "mp_15": "MP +15%", "mp_12": "MP +12%", "mp_10": "MP +10%", "mp_7": "MP +7%", "mp_5": "MP +5%", "mp_3": "MP +3%", "mp_1": "MP +1%",
    "atk_15": "ATK +15%", "atk_12": "ATK +12%", "atk_10": "ATK +10%", "atk_7": "ATK +7%", "atk_5": "ATK +5%", "atk_3": "ATK +3%", "atk_1": "ATK +1%",
    "def_15": "DEF +15%", "def_12": "DEF +12%", "def_10": "DEF +10%", "def_7": "DEF +7%", "def_5": "DEF +5%", "def_3": "DEF +3%", "def_1": "DEF +1%",
    "mag_15": "MAG +15%", "mag_12": "MAG +12%", "mag_10": "MAG +10%", "mag_7": "MAG +7%", "mag_5": "MAG +5%", "mag_3": "MAG +3%", "mag_1": "MAG +1%",
    "spr_15": "SPR +15%", "spr_12": "SPR +12%", "spr_10": "SPR +10%", "spr_7": "SPR +7%", "spr_5": "SPR +5%", "spr_3": "SPR +3%", "spr_1": "SPR +1%",
    "autoRegen_4": "Auto-Regen 4","autoRegen_3": "Auto-Regen 3","autoRegen_2": "Auto-Regen 2","autoRegen_1": "Auto-Regen 1",
    "autoRefresh_2": "Auto-Refresh 2","autoRefresh_1": "Auto-Refresh 1",
    "autoProtect_5": "Auto-Protect 5","autoProtect_4": "Auto-Protect 4","autoProtect_3": "Auto-Protect 3","autoProtect_2": "Auto-Protect 2","autoProtect_1": "Auto-Protect 1",
    "autoShell_5": "Auto-Shell 5","autoShell_4": "Auto-Shell 4","autoShell_3": "Auto-Shell 3","autoShell_2": "Auto-Shell 2","autoShell_1": "Auto-Shell 1",
  },
  ITEM_ENHANCEMENT_ABILITIES : {
    "rare_3":{
      "dagger": {"lbFillRate":100},
      "sword": {"hp%":15, "atk%":15},
      "greatSword": {"hp%":15, "atk%":15},
      "katana": {"hp%":15, "atk%":15},
      "staff": {"mp%":15, "spr%":15},
      "rod": {"mp%":15, "mag%":15},
      "bow": {"atk%":30, "mag%":30},
      "axe": {"atk%":30},
      "hammer": {"hp%":15, "def%":15},
      "spear": {"hp%":15, "atk%":15},
      "harp": {"hp%":15, "spr%":15},
      "whip": {"mp%":30},
      "throwing": {"hp%":15, "mp%":15},
      "gun": {"atk%":30},
      "mace": {"hp%":30},
      "fist": {"hp%":15, "atk%":15},
    },
    "rare_4":{
      "dagger": {"lbFillRate":150},
      "sword": {"hp%":20, "atk%":20},
      "greatSword": {"hp%":20, "atk%":20},
      "katana": {"hp%":20, "atk%":20},
      "staff": {"mp%":20, "spr%":20},
      "rod": {"mp%":20, "mag%":20},
      "bow": {"atk%":35, "mag%":35},
      "axe": {"atk%":40},
      "hammer": {"hp%":20, "def%":20},
      "spear": {"hp%":20, "atk%":20},
      "harp": {"hp%":20, "spr%":20},
      "whip": {"mp%":40},
      "throwing": {"hp%":20, "mp%":20},
      "gun": {"atk%":40},
      "mace": {"hp%":40},
      "fist": {"hp%":20, "atk%":20},
    },
    "hp_15": {"hp%":15}, "hp_12": {"hp%":12}, "hp_10": {"hp%":10}, "hp_7": {"hp%":7}, "hp_5": {"hp%":5}, "hp_3": {"hp%":3}, "hp_1": {"hp%":1},
    "mp_15": {"mp%":15}, "mp_12": {"mp%":12}, "mp_10": {"mp%":10}, "mp_7": {"mp%":7}, "mp_5": {"mp%":5}, "mp_3": {"mp%":3}, "mp_1": {"mp%":1},
    "atk_15": {"atk%":15}, "atk_12": {"atk%":12}, "atk_10": {"atk%":10}, "atk_7": {"atk%":7}, "atk_5": {"atk%":5}, "atk_3": {"atk%":3}, "atk_1": {"atk%":1},
    "def_15": {"def%":15}, "def_12": {"def%":12}, "def_10": {"def%":10}, "def_7": {"def%":7}, "def_5": {"def%":5}, "def_3": {"def%":3}, "def_1": {"def%":1},
    "mag_15": {"mag%":15}, "mag_12": {"mag%":12}, "mag_10": {"mag%":10}, "mag_7": {"mag%":7}, "mag_5": {"mag%":5}, "mag_3": {"mag%":3}, "mag_1": {"mag%":1},
    "spr_15": {"spr%":15}, "spr_12": {"spr%":12}, "spr_10": {"spr%":10}, "spr_7": {"spr%":7}, "spr_5": {"spr%":5}, "spr_3": {"spr%":3}, "spr_1": {"spr%":1},
    "autoRefresh_2": {"mpRefresh":5},"autoRefresh_1": {"mpRefresh":3}
  }
}
