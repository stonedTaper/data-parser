import argparse
from data_parser import config, processor, util

def main():
    parser = argparse.ArgumentParser(description='Data parser application')
    parser.add_argument('-c', '--config', help='Path to configuration file', required=True)
    args = parser.parse_args()

    config.load(args.config)
    processor.process()
    util.save_results()

if __name__ == '__main__':
    main()